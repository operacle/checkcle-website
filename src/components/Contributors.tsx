import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, UserRound } from 'lucide-react';

interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

const Contributors = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/operacle/checkcle/contributors');
        const data = await response.json();
        setContributors(data.slice(0, 10)); // Show top 6 contributors
      } catch (error) {
        console.error('Error fetching contributors:', error);
        
        setContributors([]);
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Contributors</h2>
            <p className="text-xl text-gray-400">Loading contributors...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contributors</h2>
          <p className="text-xl text-gray-400">Meet our maintianers and contributors</p>
        </div>
        
        {contributors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contributors.map((contributor, index) => (
              <motion.div
                key={contributor.login}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <img
                  src={contributor.avatar_url}
                  alt={contributor.login}
                  className="h-16 w-16 rounded-full mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-white font-medium">{contributor.login}</h3>
                  <p className="text-gray-400">{contributor.contributions} contributions</p>
                </div>
                <a
                  href={contributor.html_url}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6" />
                </a>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <div className="h-16 w-16 rounded-full mx-auto bg-gray-700 flex items-center justify-center mb-4">
              <UserRound className="h-8 w-8 text-gray-300" />
            </div>
            <p className="text-gray-400">No contributors found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contributors;