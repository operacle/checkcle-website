import React from 'react';
import { HeartPulse } from 'lucide-react';

const Donation = () => {
  return (
    <section className="relative py-20 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-2xl p-8 md:p-12 border border-emerald-500/20 bg-[#020617]">
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <HeartPulse className="w-8 h-8 text-emerald-400 animate-pulse" />
                <h2 className="text-3xl font-bold text-white">Support Our Mission</h2>
              </div>
              <p className="text-lg text-gray-300 mb-6">
                Help us maintain and improve ReamStack by making a donation. Your support keeps our servers running and enables us to develop new features.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/sponsors/reamstack-lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors duration-200"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Become a Sponsor
                </a>
                <a
                  href="https://opencollective.com/reamstack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors duration-200"
                >
                  Support on Open Collective
                </a>
              </div>
            </div>
            
            {/* Uptime Monitor Visual */}
            <div className="relative w-full md:w-72 h-40 bg-black/20 rounded-lg backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-16 flex items-center justify-center">
                  <div className="w-full h-[2px] bg-emerald-900/30 relative">
                    <div className="absolute inset-0 heartbeat-line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;