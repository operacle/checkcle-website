import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
/* Uptime Monitor Visual 
  {
    name: 'John Doe',
    role: 'DevOps Engineer',
    company: 'Tech Corp',
    avatar: '/placeholder.svg',
    text: 'ReamStack has transformed how we monitor our infrastructure. The real-time alerts and intuitive dashboard save us countless hours.',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    company: 'StartupX',
    avatar: '/placeholder.svg',
    text: "ReamStack is the best monitoring solution we've used. The customization options and reliability are unmatched in the industry.",
  },
  {
    name: 'Mark Wilson',
    role: 'System Administrator',
    company: 'Enterprise Inc',
    avatar: '/placeholder.svg',
    text: 'Setting up ReamStack was a breeze. The documentation is excellent, and the support team is incredibly responsive.',
  },
  */
];

const Community = () => {
  return (
    <section className="py-20 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Loved by the Community</h2>
          <p className="text-xl text-gray-400">Don't take our word for it - listen to what the community has to say</p>
          <p className="text-xl text-gray-400">Coming Soon</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-white font-medium">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
