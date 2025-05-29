
import React from 'react';
import { ArrowRight, Rocket, Copy, ExternalLink, Github, FileText, Terminal } from 'lucide-react';
import { toast } from 'sonner';
import DashboardPreview from './DashboardPreview';
import { HeroSection } from './ui/3d-hero-section-boxes';

const Hero = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(`version: '3.9'

services:
  checkcle:
    image: operacle/checkcle:latest
    container_name: checkcle
    restart: unless-stopped
    ports:
      - "8090:8090"  # Web Application
    volumes:
      - /opt/pb_data:/mnt/pb_data  # Host directory mapped to container path
    ulimits:
      nofile:
        soft: 4096
        hard: 8192`);
    toast.success('Docker Compose configuration copied to clipboard!');
  };

  return (
    <section id="home" className="relative">
      {/* 3D Spline Background */}
      <HeroSection />
      
      {/* Additional content below the hero */}
      <div className="relative bg-black text-white pt-20 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dashboard preview */}
          <div className="w-full max-w-4xl mx-auto mb-10">
            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <div className="relative shadow-2xl shadow-emerald-500/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent z-10 pointer-events-none"></div>
                <DashboardPreview />
              </div>
            </div>
          </div>

          {/* Action buttons and links */}
          <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
            {/* Links */}
            <div className="flex flex-wrap gap-4 justify-center">
              {/* Announcement badge */}
              <a 
                href="https://github.com/operacle/checkcle/releases"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 hover:bg-white/20 transition-colors group"
              >
                <Rocket className="w-4 h-4" />
                <span>Released Version: V1.2.0</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
          
              
              <a 
                href="https://docs.checkcle.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-500/10 backdrop-blur-sm text-white hover:bg-emerald-500/20 transition-colors"
              >
                <FileText className="w-5 h-5 mr-2" />
                Documentation
              </a>
            </div>

            {/* Docker Compose section */}
            <div className="w-full mt-8">
              <p className="text-lg text-gray-300 mb-3 text-center">You can use one-click bash script above Or use Docker Compose:</p>
              <div className="relative group max-w-3xl mx-auto">
                <div onClick={handleCopy} className="flex items-center gap-2 bg-emerald-950/50 backdrop-blur-sm px-6 py-4 rounded-xl cursor-pointer border border-emerald-800/30 hover:bg-emerald-950/70 hover:border-emerald-700/50 transition-all duration-300 shadow-lg shadow-emerald-900/20">
                  <pre className="text-white text-sm text-left overflow-x-auto max-w-full">
                    <code className="font-mono">{`version: '3.9'

services:
  checkcle:
    image: operacle/checkcle:latest
    container_name: checkcle
    restart: unless-stopped
    ports:
      - "8090:8090"  # Web Application
    volumes:
      - /opt/pb_data:/mnt/pb_data  # Host directory mapped to container path
    ulimits:
      nofile:
        soft: 4096
        hard: 8192`}</code>
                  </pre>
                  <Copy className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors flex-shrink-0 ml-2" />
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-2 text-center">Click to copy the Docker Compose configuration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;