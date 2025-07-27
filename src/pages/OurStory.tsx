
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Heart, Code, Users, Zap, Github, Twitter, Linkedin, ContainerIcon, Container} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const OurStory = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-black via-[#020617] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Our Story
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The journey behind CheckCle and why we believe in open source monitoring
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white mb-8">Meet Tola</h2>
              <div className="text-lg text-gray-300 space-y-6 leading-relaxed">
                <p>
                  Hi! I'm Tola, and I started CheckCle to make monitoring simpler, open, and fully self-hosted.
                </p>
                <p>
                  About 8 years ago, while working as a Senior System Engineer managing complex server environments, 
                  I struggled with monitoring tools that were either overly complicated, fragmented, or hidden behind paid features.
                </p>
                <p>
                  Over time, I discovered inspiring projects like Uptime Kuma and Bezel, which showed how powerful 
                  open source monitoring could be. That inspired me to think bigger: What if everything you need could 
                  live in one place, easy to deploy, modern, and fully in your hands?
                </p>
                <p>
                  That idea became CheckCle, a fully open source platform combining uptime monitoring, server metrics, 
                  distributed agents, SSL certificate checks, notifications, and public status pages, all under your 
                  control with no SaaS dependency.
                </p>
                <p>
                  Today, CheckCle helps developers and operators monitor their infrastructure easily, transparently, 
                  and on their own terms.
                </p>
                <p className="text-emerald-400 font-semibold text-xl">
                  And we're just getting started.
                </p>
              </div>
            </div>

           {/* Image and Social Links */}
            <div className="flex flex-col items-center space-y-6">
              <div className="relative">
                <img 
                  src="/tolaleng.jpg" 
                  alt="Tola - Creator of CheckCle" 
                  className="rounded-2xl shadow-2xl max-w-md w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent rounded-2xl"></div>
              </div>
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/tolaleng" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-5 h-5 text-white group-hover:text-emerald-400 transition-colors" />
                  </Button>
                </a>

                   <a 
                  href="https://hub.docker.com/r/operacle/checkcle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors"
                  >
                    <Container className="w-5 h-5 text-white group-hover:text-emerald-400 transition-colors" />
                  </Button>
                </a>
                
                <a 
                  href="https://x.com/checkcle_oss" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors" />
                  </Button>
                </a>
                
                <a 
                  href="https://linkedin.com/company/checkcle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-white group-hover:text-blue-600 transition-colors" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-400">What drives us to build CheckCle</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/30 transition-colors">
                <Code className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Open Source</h3>
              <p className="text-gray-400">Transparent, community-driven development</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Simplicity</h3>
              <p className="text-gray-400">Easy to use, deploy, and maintain</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-colors">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community</h3>
              <p className="text-gray-400">Built by developers, for developers</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/30 transition-colors">
                <Heart className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Self-Hosted</h3>
              <p className="text-gray-400">Your data, your control, your infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Our Vision</h2>
          <div className="bg-white/5 rounded-2xl p-8 border border-gray-800 max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              We envision a world where infrastructure monitoring is accessible to everyone — from individual developers 
              to large enterprises — without vendor lock-in, hidden costs, or compromises on privacy and control.
            </p>
            <p className="text-lg text-emerald-400 font-semibold">
              CheckCle is our contribution to making that vision a reality.
            </p>
          </div>
        </div>
      </section>

         {/* Sponsor Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/5 rounded-2xl p-12 border border-gray-800 max-w-4xl mx-auto">
            <Heart className="w-16 h-16 text-emerald-400 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl font-bold text-white mb-6">Support Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Help us continue building CheckCle and keep it free and open source. Your sponsorship 
              enables us to focus on what matters most — creating the best monitoring platform for the community.
            </p>
            <Link to="/sponsor">
              <Button 
                size="lg" 
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3"
              >
                <Heart className="w-5 h-5 mr-2" />
                Become a Sponsor
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OurStory;