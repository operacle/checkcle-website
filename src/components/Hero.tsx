import React from 'react';
import InteractiveHero from './ui/hero-section-nexus';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';
import DashboardPreview from './DashboardPreview';

const dockerComposeYml = `
version: '3.9'

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
        hard: 8192
`;

const Hero = () => {
  const handleCopy = async () => {
    try {
      // Try Clipboard API
      await navigator.clipboard.writeText(dockerComposeYml);
      toast.success('Docker Compose configuration copied to clipboard!');
    } catch (error) {
      // Fallback using textarea
      try {
        const textarea = document.createElement('textarea');
        textarea.value = dockerComposeYml;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        toast.success('Docker Compose configuration copied (fallback)!');
      } catch (fallbackError) {
        console.error('Both clipboard methods failed:', fallbackError);
        toast.error('Failed to copy Docker Compose configuration.');
      }
    }
  };

  return (
    <section id="home" className="relative">
      {/* Interactive Hero Section */}
      <InteractiveHero />

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

          {/* Docker Compose section */}
          <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
            <div className="w-full">
              <p className="text-lg text-gray-300 mb-3 text-center">Or use Docker Compose:</p>
              <div className="relative group max-w-3xl mx-auto">
                <div className="relative bg-emerald-950/50 backdrop-blur-sm px-6 py-4 rounded-xl border border-emerald-800/30 hover:bg-emerald-950/70 hover:border-emerald-700/50 transition-all duration-300 shadow-lg shadow-emerald-900/20">
                  <pre className="text-white text-sm overflow-x-auto max-w-full whitespace-pre-wrap">
                    <code className="font-mono">{dockerComposeYml}</code>
                  </pre>
                  <button
                    onClick={handleCopy}
                    className="absolute top-3 right-3 p-1 bg-black/40 hover:bg-black/70 rounded-md"
                    title="Copy to clipboard"
                  >
                    <Copy className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-2 text-center">
                Click the icon to copy the Docker Compose configuration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
