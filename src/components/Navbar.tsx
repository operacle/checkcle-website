
import React, { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#020617]/90 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src="/uploads/checkcle_logo.png" 
                alt="CheckCle Logo" 
                className="h-10 w-auto"
              />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors">Home</a>
              <a onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors">Features</a>
              <a onClick={() => scrollToSection('why-checkcle')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors">CheckCle</a>
              <a onClick={() => scrollToSection('installation')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors">Getting Started</a>
              <a 
                href="https://github.com/operacle/checkcle" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#020617]/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Home</a>
            <a onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Features</a>
            <a onClick={() => scrollToSection('why-checkcle')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">CheckCle</a>
            <a onClick={() => scrollToSection('installation')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Getting Started</a>
            <a 
              href="https://github.com/operacle/checkcle" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
