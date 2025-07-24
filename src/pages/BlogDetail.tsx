import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface BlogPost {
  id: string;
  blog_id: string;
  title: string;
  slug: string;
  cover_image: string;
  content: string;
  meta_title: string;
  meta_description: string;
  is_featured: boolean;
  status: string;
  author_name: string;
  published_at: string;
  created: string;
  updated: string;
  collectionId: string;
}

const fetchBlogPost = async (slug: string): Promise<BlogPost | null> => {
  const response = await fetch(`https://blog.reamstack.com/api/collections/blog_detail/records?filter=(slug="${slug}")`);
  if (!response.ok) {
    throw new Error('Failed to fetch blog post');
  }
  const data = await response.json();
  return data.items?.[0] || null;
};

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: () => fetchBlogPost(slug!),
    enabled: !!slug,
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.meta_description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const formatContent = (content: string) => {
    // Simple formatting that preserves original structure
    let formattedContent = content
      // Convert double newlines to paragraph breaks
      .replace(/\n\n/g, '</p><p>')
      // Convert single newlines to line breaks
      .replace(/\n/g, '<br>')
      // Handle basic markdown formatting
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      // Handle headings
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^# (.*$)/gm, '<h1>$1</h1>');

    // Wrap in paragraph tags if not already wrapped
    if (!formattedContent.includes('<p>')) {
      formattedContent = `<p>${formattedContent}</p>`;
    }

    return formattedContent;
  };

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen bg-black text-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-400"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="flex flex-col min-h-screen bg-black text-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
            <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link 
              to="/blog"
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back to Blog */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link 
              to="/blog"
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center text-sm text-gray-400">
                <User className="w-4 h-4 mr-2" />
                <span>{post.author_name}</span>
                <Calendar className="w-4 h-4 ml-4 mr-2" />
                <span>{formatDate(post.published_at)}</span>
              </div>
              <button
                onClick={handleShare}
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {post.meta_description && (
              <p className="text-xl text-gray-300 leading-relaxed">
                {post.meta_description}
              </p>
            )}
          </motion.header>

          {/* Cover Image */}
          {post.cover_image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <img 
                src={`https://blog.reamstack.com/api/files/${post.collectionId}/${post.id}/${post.cover_image}`}
                alt={post.title}
                className="w-full h-96 object-cover rounded-lg"
              />
            </motion.div>
          )}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 leading-relaxed text-lg"
          >
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />
          </motion.div>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-gray-800"
          >
            <div className="flex items-center justify-between">
              <div className="text-gray-400">
                <p>Was this article helpful?</p>
              </div>
              <button
                onClick={handleShare}
                className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </button>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;