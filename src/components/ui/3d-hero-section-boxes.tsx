"use client";

import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

function HeroSplineBackground() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      pointerEvents: 'auto',
      overflow: 'hidden',
    }}>
      <Spline
        style={{
          width: '100%',
          height: '100vh',
          pointerEvents: 'auto',
        }}
        scene="https://prod.spline.design/dJqTIQ-tE3ULUPMi/scene.splinecode"
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: `
            linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent 30%, transparent 70%, rgba(0, 0, 0, 0.8)),
            linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.9))
          `,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

function HeroContent() {
  const handleOneClickInstall = () => {
    navigator.clipboard.writeText(`bash <(curl -fsSL https://checkcle.io/install.sh)`);
    // You might want to add a toast notification here if available
    console.log('One-click install command copied to clipboard!');
  };

  return (
    <div className="text-white px-4 max-w-screen-xl mx-auto w-full flex flex-col lg:flex-row justify-between items-start lg:items-center py-16">
      <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight tracking-wide">
          Deploy CC in <span className="text-emerald-400">Minutes</span> with <span className="relative inline-block">
            <span className="text-emerald-400 font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">One Click</span>
            <span className="absolute bottom-1 left-0 w-full h-1.5 bg-emerald-500/50 rounded-full"></span>
          </span>
        </h1>
        <div className="text-sm text-gray-300 opacity-90 mt-4">
          MONITORING \ SERVERS \ REAL-TIME \ INCIDENTS
        </div>
      </div>

      <div className="w-full lg:w-1/2 pl-0 lg:pl-8 flex flex-col items-start">
        <p className="text-base sm:text-lg opacity-80 mb-6 max-w-md">
          CheckCle is an <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">open-source</span> monitoring platform offering real-time insights into server and service health, incident management, and operational transparency.
        </p>
        <div className="flex pointer-events-auto flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-3 mb-4">
          <a 
            href="https://demo.checkcle.io" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-emerald-400 text-emerald-400 font-semibold py-2.5 sm:py-3.5 px-6 sm:px-8 rounded-2xl transition duration-300 w-full sm:w-auto hover:bg-emerald-400 hover:text-black text-center"
          >
            Try Live Demo
          </a>
          <a 
            href="https://github.com/operacle/checkcle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pointer-events-auto bg-emerald-500 text-black font-semibold py-2.5 sm:py-3.5 px-6 sm:px-8 rounded-2xl transition duration-300 hover:scale-105 flex items-center justify-center w-full sm:w-auto"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
        
        {/* One-click install button */}
        <button 
          onClick={handleOneClickInstall}
          className="pointer-events-auto inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-mono text-sm sm:text-base hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 group w-full sm:w-auto"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
          </svg>
          <span className="truncate">bash &lt;(curl -fsSL https://checkcle.io/install.sh)</span>
        </button>
      </div>
    </div>
  );
}

const HeroSection = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroContentRef.current) {
        requestAnimationFrame(() => {
          const scrollPosition = window.pageYOffset;
          const maxScroll = 400;
          const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
          if (heroContentRef.current) {
             heroContentRef.current.style.opacity = opacity.toString();
          }
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <HeroSplineBackground />
      </div>

      <div ref={heroContentRef} style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh',
        display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10, pointerEvents: 'none'
      }}>
        <HeroContent />
      </div>
    </div>
  );
};

export { HeroSection };