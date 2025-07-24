
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

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

const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await fetch('https://blog.reamstack.com/api/collections/blog_detail/records');
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts');
  }
  const data = await response.json();
  const items: BlogPost[] = data.items || [];

  // Sort posts by published_at (or fallback to created) in descending order
  return items.sort((a, b) =>
    new Date(b.published_at || b.created).getTime() - new Date(a.published_at || a.created).getTime()
  );
};


const Blog = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: fetchBlogPosts,
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-black text-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Error loading blog posts</h2>
            <p className="text-gray-400">Please try again later.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const featuredPosts = posts?.filter(post => post.is_featured && post.status === 'published') || [];
  const regularPosts = posts?.filter(post => !post.is_featured && post.status === 'published') || [];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-900/20 via-black to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 gradient-text"
            >
              CheckCle Blog
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              Discover the latest insights, tutorials, and updates from the CheckCle community
            </motion.p>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 bg-[#020617]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-12 text-center">Featured Posts</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                      {post.cover_image ? (
                        <img 
                          src={`https://blog.reamstack.com/api/files/${post.collectionId}/${post.id}/${post.cover_image}`}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-white text-6xl font-bold opacity-50">R</div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-400 mb-3">
                        <User className="w-4 h-4 mr-2" />
                        <span>{post.author_name}</span>
                        <Calendar className="w-4 h-4 ml-4 mr-2" />
                        <span>{formatDate(post.published_at)}</span>
                      </div>
                      <Link to={`/blog/${post.slug}`}>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-400 transition-colors cursor-pointer">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {post.meta_description}
                      </p>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Latest Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    {post.cover_image ? (
                      <img 
                        src={`https://blog.reamstack.com/api/files/${post.collectionId}/${post.id}/${post.cover_image}`}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-white text-6xl font-bold opacity-50">R</div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <User className="w-4 h-4 mr-2" />
                      <span>{post.author_name}</span>
                      <Calendar className="w-4 h-4 ml-4 mr-2" />
                      <span>{formatDate(post.published_at)}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-400 transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.meta_description}
                    </p>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;