import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    {
      number: '100K+',
      label: 'Total Downloaded',
    },
    {
      number: '89K+',
      label: 'Monthly Site Visits',
    },
    {
      number: '2K',
      label: 'GitHub Stars',
    },
    {
      number: '6 Months',
      label: 'Project Age',
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;