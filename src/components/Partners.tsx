
import React from 'react';

const partners = [
  { 
    name: 'Cloudflare', 
    logo: 'https://cdn.checkcle.io/images/sponsor/cloudflare-checkcle_logo.png'
  },
  { 
    name: 'DigitalOcean', 
    logo: 'https://cdn.checkcle.io/images/sponsor/digitalocean_checkcle.png'
  },
  { 
    name: 'Gitbook', 
    logo: 'https://cdn.checkcle.io/images/sponsor/gitbook_logo.png'
  },
  { 
    name: 'Operacle', 
    logo: 'https://cdn.checkcle.io/images/sponsor/operacle-t_logo.png'
  },
  { 
    name: 'Jetbrains', 
    logo: 'https://cdn.checkcle.io/images/sponsor/jetbrains-white.png'
  }
];

const Partners = () => {
  // Duplicate partners array for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-20 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ecosystem & Community Partner
          </h2>
          <p className="text-xl text-gray-400">
            Community and Infrastructure Backers
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-rtl">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-8 p-6 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative w-48 h-32 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full w-auto h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;