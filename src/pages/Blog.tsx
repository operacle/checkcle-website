
import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogFilter from '../components/BlogFilter';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

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
  categories: string[];
}

const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await fetch('https://blog-api.checkcle.io/api/collections/blog_detail/records?sort=-published_at');
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts');
  }
  const data = await response.json();
  return data.items || [];
};

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; 
  
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: fetchBlogPosts,
  });

  const { filteredPosts, postCounts, paginatedPosts, totalPages } = useMemo(() => {
    if (!posts) return { filteredPosts: [], postCounts: {}, paginatedPosts: [], totalPages: 0 };
    
    const publishedPosts = posts.filter(post => post.status === 'published');
    
    const counts: Record<string, number> = {
      all: publishedPosts.length,
      ecosystem: 0,
      release: 0,
      'community-partner': 0,
      announcement: 0
    };

    // Count posts by category
    publishedPosts.forEach(post => {
      if (post.categories && Array.isArray(post.categories)) {
        post.categories.forEach(category => {
          if (counts.hasOwnProperty(category)) {
            counts[category]++;
          }
        });
      }
    });

    // Filter posts by selected category
    const filtered = selectedCategory === 'all' 
      ? publishedPosts
      : publishedPosts.filter(post => 
          post.categories && 
          Array.isArray(post.categories) && 
          post.categories.includes(selectedCategory)
        );

    // Calculate pagination
    const totalPages = Math.ceil(filtered.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = filtered.slice(startIndex, endIndex);

    return { filteredPosts: filtered, postCounts: counts, paginatedPosts, totalPages };
  }, [posts, selectedCategory, currentPage, postsPerPage]);

  // Reset to first page when category changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

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

  const featuredPosts = paginatedPosts.filter(post => post.is_featured);
  const regularPosts = paginatedPosts.filter(post => !post.is_featured);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              CheckCle Community
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

        <section className="py-8 bg-[#020617]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogFilter 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              postCounts={postCounts}
            />
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 bg-[#020617]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {selectedCategory === 'all' && <h3 className="text-2xl font-bold mb-12 text-center">Featured Posts</h3>}
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
                          src={`https://blog-api.checkcle.io/api/files/${post.collectionId}/${post.id}/${post.cover_image}`}
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

        {regularPosts.length > 0 && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {selectedCategory === 'all' && featuredPosts.length > 0 && <h3 className="text-2xl font-bold mb-12 text-center">Latest Posts</h3>}
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
                          src={`https://blog-api.checkcle.io/api/files/${post.collectionId}/${post.id}/${post.cover_image}`}
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

        {/* Pagination */}
        {totalPages > 1 && (
          <section className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center items-center gap-4">
                <Button
                  variant="outline"
                  size="default"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2 px-4 py-2 border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>
                
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "ghost"}
                      size="default"
                      onClick={() => handlePageChange(page)}
                      className={`min-w-[40px] h-10 ${
                        currentPage === page 
                          ? "bg-emerald-400 text-black hover:bg-emerald-500" 
                          : "text-emerald-400 hover:bg-emerald-400/10"
                      }`}
                    >
                      {page}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="default"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2 px-4 py-2 border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Blog;