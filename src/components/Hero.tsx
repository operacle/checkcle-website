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
       
      </div>
    </section>
  );
};

export default Hero;
