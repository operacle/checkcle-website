import React from 'react';
import { motion } from 'framer-motion';
import { Github, UserRound, Users, UsersRound, PersonStanding } from 'lucide-react';

const contributors = [
  { 
    name: 'Tola Leng', 
    role: 'Creator and Core Maintainer', 
    avatar: '/reamstack-uploads/a0f9d871-f20c-4743-ab95-982f55e0b84d.png', 
    github: 'https://github.com/tolalengoss' 
  },
  { 
    name: 'You are the Next to Be 1', 
    role: 'Maintainer', 
    icon: UserRound, 
    github: '#' 
  },
  { 
    name: 'You are the Next to Be 2', 
    role: 'Maintainer', 
    icon: Users, 
    github: '#' 
  },
  { 
    name: 'You are the Next to Be 3', 
    role: 'Maintainer', 
    icon: PersonStanding, 
    github: '#' 
  },
  { 
    name: 'You are the Next to Be 4', 
    role: 'Contributor', 
    icon: UsersRound, 
    github: '#' 
  },
  { 
    name: 'You are the Next to Be 5', 
    role: 'Contributor', 
    icon: UserRound, 
    github: '#' 
  },
];

const Contributors = () => {
  return (
    <section className="py-20 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contributors</h2>
          <p className="text-xl text-gray-400">Meet the amazing people behind ReamStack</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contributors.map((contributor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              {contributor.avatar ? (
                <img
                  src={contributor.avatar}
                  alt={contributor.name}
                  className="h-16 w-16 rounded-full mr-4"
                />
              ) : (
                <div className="h-16 w-16 rounded-full mr-4 bg-gray-700 flex items-center justify-center">
                  {contributor.icon && <contributor.icon className="h-8 w-8 text-gray-300" />}
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-white font-medium">{contributor.name}</h3>
                <p className="text-gray-400">{contributor.role}</p>
              </div>
              <a
                href={contributor.github}
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contributors;