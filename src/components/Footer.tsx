import React from 'react';
import { Github, MessageCircle, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#020617] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://docs.checkcle.io" className="text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="https://github.com/operacle/checkcle" className="text-gray-400 hover:text-white">GitHub</a></li>
              <li><a href="https://discord.gg/xs9gbubGwX" className="text-gray-400 hover:text-white">Discord</a></li>
              <li><a href="https://x.com/tlengoss" className="text-gray-400 hover:text-white">Twitter</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="https://github.com/operacle/checkcle" className="text-gray-400 hover:text-white">Getting Started</a></li>
              <li><a href="https://github.com/operacle/checkcle/discussions" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="https://x.com/tlengoss" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="https://github.com/operacle/checkcle/blob/main/LICENSE.md" className="text-gray-400 hover:text-white">License</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-6">
              <a href="https://github.com/operacle/checkcle" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://discord.gg/xs9gbubGwX" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="https://x.com/tlengoss" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <p className="text-center text-gray-400">
           © {new Date().getFullYear()}. CheckCle. Released under the MIT License. Created by: Tola Leng
          </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;