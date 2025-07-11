import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
  { 
    name: 'Digital Ocean', 
    logo: '/uploads/digitalocean.png'
  },
  { 
    name: 'Ezecom', 
    logo: '/uploads/ezecom.png'
  },
  { 
    name: 'Online', 
    logo: '/uploads/01ff563f-a2bd-400f-9b69-8e7225eecfbc.png'
  },
  { 
    name: 'Operacle', 
    logo: '/uploads/operacle-logo.png'
  }
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Sponsors</h2>
          <p className="text-xl text-gray-400">Trusted by industry worldwide</p>
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