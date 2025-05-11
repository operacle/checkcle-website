import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
  { 
    name: 'AWS', 
    logo: '/reamstack-uploads/d1e10e70-470a-42a0-a5cf-acad974a2348.png'
  },
  { 
    name: 'Ezecom', 
    logo: '/reamstack-uploads/184fe510-34a3-4bb5-93cf-ad4e039c61d8.png'
  },
  { 
    name: 'Online', 
    logo: '/reamstack-uploads/01ff563f-a2bd-400f-9b69-8e7225eecfbc.png'
  },
  { 
    name: 'DPDC', 
    logo: '/reamstack-uploads/10336b78-df32-4dac-ad8d-1d90fa8f99d9.png'
  }
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Sponsors</h2>
          <p className="text-xl text-gray-400">Trusted by industry leaders worldwide</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <div className="relative w-full h-24 flex items-center justify-center">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-[180px] max-h-[80px] w-auto h-auto object-contain filter brightness-100 hover:brightness-110 transition-all"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;