import React from 'react';
import { Terminal } from 'lucide-react';

const Installation = () => {
  return (
    <section id="installation" className="py-20 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#FEF7CD] mb-4">Quick Installation</h2>
          <p className="text-xl text-gray-400">Get started in minutes with these simple commands</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Package Manager Commands */}
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-semibold text-white">#Start Local Development</h3>
              </div>

            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Terminal className="w-5 h-5 text-[#FEF7CD] mr-2" />
                <h3 className="text-lg font-semibold text-white">Web Application</h3>
              </div>
              <pre className="bg-black/50 p-4 rounded-md overflow-x-auto">
                <code className="text-gray-300">cd application && npm install && npm run dev  </code>
              </pre>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Terminal className="w-5 h-5 text-[#FEF7CD] mr-2" />
                <h3 className="text-lg font-semibold text-white">Server Backend</h3>
              </div>
              <pre className="bg-black/50 p-4 rounded-md overflow-x-auto">
                <code className="text-gray-300">cd server && ./pocketbase serve --dir pb_data</code>
              </pre>
            </div>
          </div>

          {/* Docker Commands */}
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Terminal className="w-5 h-5 text-[#FEF7CD] mr-2" />
                <h3 className="text-lg font-semibold text-white">Using Docker</h3>
              </div>
              <pre className="bg-black/50 p-4 rounded-md overflow-x-auto">
                <code className="text-gray-300">docker pull operacle/checkcle:latest</code>
              </pre>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Terminal className="w-5 h-5 text-[#FEF7CD] mr-2" />
                <h3 className="text-lg font-semibold text-white">Docker Compose</h3>
              </div>
              <pre className="bg-black/50 p-4 rounded-md overflow-x-auto">
                <code className="text-gray-300">{`

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
`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;