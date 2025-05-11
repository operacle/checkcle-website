import React from 'react';
import { ExternalLink, Shield, Server, Globe, Database } from 'lucide-react';

const StatusIndicator = ({ status }: { status: 'operational' | 'degraded' | 'down' }) => {
  const colors = {
    operational: 'bg-green-500',
    degraded: 'bg-yellow-500',
    down: 'bg-red-500'
  };

  return (
    <div className="flex items-center">
      <div className={`w-2 h-2 rounded-full ${colors[status]} mr-2`} />
      <span className="capitalize">{status}</span>
    </div>
  );
};

const ServiceCard = ({ name, icon: Icon, status }: { 
  name: string; 
  icon: React.ElementType; 
  status: 'operational' | 'degraded' | 'down' 
}) => (
  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-3">
        <Icon className="w-5 h-5 text-[#FEF7CD]" />
        <h3 className="text-lg font-medium text-white">{name}</h3>
      </div>
      <StatusIndicator status={status} />
    </div>
  </div>
);

const OperationalStatus = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#020617] to-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#FEF7CD] mb-4">Operational Status</h2>
          <p className="text-xl text-gray-400">Monitor our service status in real-time</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <ServiceCard 
            name="API Services" 
            icon={Server} 
            status="operational" 
          />
          <ServiceCard 
            name="ReamStack Document" 
            icon={Globe} 
            status="operational" 
          />
          <ServiceCard 
            name="ReamStack's Website" 
            icon={Database} 
            status="operational" 
          />
          <ServiceCard 
            name="Demo ReamStack" 
            icon={Shield} 
            status="operational" 
          />
        </div>

        <div className="flex justify-center">
          <a 
            href="https://status.reamstack.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="mr-3 text-lg font-medium">View Full Status Page</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OperationalStatus;