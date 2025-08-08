
import React from 'react';
import { motion } from 'framer-motion';

interface BlogFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  postCounts: Record<string, number>;
}

const categories = [
  { id: 'all', label: 'All' },
  { id: 'ecosystem', label: 'Ecosystem' },
  { id: 'release', label: 'Release' },
  { id: 'community-partner', label: 'Community Partner' },
  { id: 'announcement', label: 'Announcement' }
];

const BlogFilter: React.FC<BlogFilterProps> = ({ selectedCategory, onCategoryChange, postCounts }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedCategory === category.id
              ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
              : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
          }`}
        >
          {category.label} ({postCounts[category.id] || 0})
        </motion.button>
      ))}
    </div>
  );
};

export default BlogFilter;