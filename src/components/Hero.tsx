
import React from 'react';
import { ArrowRight, Rocket, Copy, ExternalLink, Github, FileText } from 'lucide-react';
import { toast } from 'sonner';
import DashboardPreview from './DashboardPreview';

const Hero = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(`services:
  checkcle:
    image: operacle/checkcle:latest
    container_name: checkcle
    restart: unless-stopped
    ports:
      - "8090:8090"  # Web Application
    volumes:
      - pb_data:/app/pb_data  # Ensure persistent data across rebuilds
    ulimits:
      nofile:
        soft: 4096
        hard: 8192

volumes:
  pb_data:  # Docker-managed volume for data persistence`);
    toast.success('Docker Compose configuration copied to clipboard!');
  };

  return (
    <section id="home" className="relative pb-20 pt-28 md:pt-36 lg:pt-40 min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0">
          <div className="stars absolute inset-0 animate-twinkle"></div>
          <div className="shooting-stars absolute inset-0"></div>
        </div>
        <div className="absolute left-0 right-0 top-1/2 h-0.5 transform -translate-y-1/2">
          <div className="heartbeat-line"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/50"></div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center">
          {/* Text content at the top */}
          <div className="text-center space-y-8 mb-10 max-w-4xl">
            {/* Announcement badge */}
            <a 
              href="https://github.com/operacle/checkcle/releases"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 hover:bg-white/20 transition-colors mb-6 group"
            >
              <Rocket className="w-4 h-4" />
              <span>Initial Released V1.0.0</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Deploy in <span className="text-emerald-400">Minutes</span>, Add Services
              Effortlessly with <span className="relative inline-block">
                <span className="text-emerald-400">One Click</span>
                <span className="absolute bottom-1 left-0 w-full h-1.5 bg-emerald-500/50 rounded-full"></span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed mx-auto">
              CheckCle is an <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">open-source</span> monitoring platform offering real-time insights into server and service health, incident management, and operational transparency.
            </p>
          </div>

          {/* Dashboard preview in the middle */}
          <div className="w-full max-w-4xl mb-10">
            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <div className="relative shadow-2xl shadow-emerald-500/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent z-10 pointer-events-none"></div>
                <DashboardPreview />
              </div>
            </div>
          </div>

          {/* Action buttons below the banner */}
          <div className="flex flex-col items-center gap-8 max-w-4xl">
            {/* Links */}
            <div className="flex flex-wrap gap-4 justify-center">
              {/* Demo link */}
              <a 
                href="https://demo.checkcle.io" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
              >
                Try Live Demo
                <ExternalLink className="w-4 h-4" />
              </a>
              
              <a 
                href="https://github.com/operacle/checkcle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-500/10 backdrop-blur-sm text-white hover:bg-emerald-500/20 transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                Github
              </a>
              
              <a 
                href="https://discord.gg/xs9gbubGwX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-[#5865F2]/80 backdrop-blur-sm text-white hover:bg-[#5865F2] transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Discord
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
              <p className="text-lg text-gray-300 mb-3 text-center">Get started with a single command:</p>
              <div className="relative group max-w-3xl mx-auto">
                <div onClick={handleCopy} className="flex items-center gap-2 bg-emerald-950/50 backdrop-blur-sm px-6 py-4 rounded-xl cursor-pointer border border-emerald-800/30 hover:bg-emerald-950/70 hover:border-emerald-700/50 transition-all duration-300 shadow-lg shadow-emerald-900/20">
                  <pre className="text-white text-sm text-left overflow-x-auto max-w-full">
                    <code className="font-mono">{`services:
  checkcle:
    image: operacle/checkcle:latest
    container_name: checkcle
    restart: unless-stopped
    ports:
      - "8090:8090"  # Web Application
    volumes:
      - pb_data:/app/pb_data  # Ensure persistent data across rebuilds
    ulimits:
      nofile:
        soft: 4096
        hard: 8192

volumes:
  pb_data:  # Docker-managed volume for data persistence`}</code>
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
