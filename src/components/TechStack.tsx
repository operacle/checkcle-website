import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    {
      name: "React",
      logo: "/uploads/5f0bee03-a25f-48d0-8c03-c5046fbc0c3c.png",
      description: "A JavaScript library for building user interfaces"
    },
    {
      name: "Vite",
      logo: "/uploads/fe9aaa41-2555-4f3e-9170-96fc35c8e116.png",
      description: "Next Generation Frontend Tooling"
    },
    {
      name: "Tailwind CSS",
      logo: "/uploads/840a7d46-00b7-45a0-a4f7-4f0fdc92bb67.png",
      description: "A utility-first CSS framework"
    },
    {
      name: "shadcn/ui",
      logo: "/uploads/2e4b0518-aaf7-404f-88ab-b585d88c9c12.png",
      description: "Re-usable components built with Radix UI and Tailwind"
    },
    {
      name: "SQLite",
      logo: "/uploads/sqlite.png",
      description: "lightweight, self-contained, serverless SQL database engine"
    },
    {
      name: "TypeScript",
      logo: "/uploads/0de94ae8-fce4-4b58-a011-dce04bb3bb94.png",
      description: "JavaScript with syntax for types"
    },
    {
      name: "Golang",
      logo: "/uploads/golang.png",
      description: "open-source programming language"
    },
    {
      name: "Pocketbase",
      logo: "/uploads/pocketbase.png",
      description: "Backend API in 1 file"
    }
  ];

  return (
    <section className="py-16 bg-[#020617] overflow-hidden relative min-h-[400px]">
      {/* Stars background */}
      <div className="absolute inset-0 stars opacity-50" />
      
      {/* Shooting stars */}
      <div className="absolute inset-0 shooting-stars" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Tech Stack We Used</h2>
          <p className="text-lg text-gray-400">Powered by industry-leading technologies for optimal performance and reliability</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="h-full p-6 rounded-xl bg-[#020617]/80 backdrop-blur-3xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;