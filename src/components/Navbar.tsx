import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import GitHubStarButton from '@/components/ui/github-star-button';
import { Link } from 'react-router-dom';

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
              <Link to="/">
                <img 
                  src="uploads/checkcle_logo.png" 
                  alt="CheckCle Logo" 
                  className="h-10 w-auto"
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              <a onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors">Features</a>
              <Link to="/our-story" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Our Story</Link>
              <Link to="/support" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Support</Link>
              <Link
  to="/#faq"
  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
>
  FAQ
</Link>
              <a href="https://docs.checkcle.io" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors">Docs</a>
              <GitHubStarButton />
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
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
            <a onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Features</a>
            <Link to="/our-story" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Our Story</Link>
            <Link to="/support" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Support</Link>
            <Link
  to="/#faq"
  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
>
  FAQ
</Link>
            <a href="https://docs.checkcle.io" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors">Docs</a>
            <div className="px-3 py-2">
              <GitHubStarButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;