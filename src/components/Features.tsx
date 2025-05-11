
import React from 'react';
import { Activity, Server, Shield, Bell, BarChart3, Database, Users, Palette, MessageSquare, LineChart, Clock, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: <Activity className="h-8 w-8 text-[#9b87f5]" />,
    title: 'Uptime Monitoring',
    description: 'Track availability and performance with HTTP, TCP, DNS monitoring'
  },
  {
    icon: <Server className="h-8 w-8 text-[#7E69AB]" />,
    title: 'Server Metrics',
    description: 'Monitor CPU, memory, and disk usage across Linux & Windows'
  },
  {
    icon: <Shield className="h-8 w-8 text-[#6E59A5]" />,
    title: 'SSL Monitoring',
    description: 'Stay ahead of SSL certificate expiration and domain status'
  },
  {
    icon: <Bell className="h-8 w-8 text-[#8B5CF6]" />,
    title: 'Smart Alerts',
    description: 'Get instant notifications via email, Telegram, Discord & Slack'
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-[#D946EF]" />,
    title: 'Real-time Analytics',
    description: 'Monitor performance metrics with live updates'
  },
  {
    icon: <Database className="h-8 w-8 text-[#F97316]" />,
    title: 'Data Storage',
    description: 'Secure and efficient data management with retention policies'
  },
  {
    icon: <Users className="h-8 w-8 text-[#0EA5E9]" />,
    title: 'User Management',
    description: 'Multiple users with customizable roles and permissions'
  },
  {
    icon: <Palette className="h-8 w-8 text-[#1EAEDB]" />,
    title: 'Customization',
    description: 'Multi-language support with dark mode and themes'
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-[#33C3F0]" />,
    title: 'Notification Center',
    description: 'Customizable alert templates and delivery channels'
  },
  {
    icon: <LineChart className="h-8 w-8 text-[#9b87f5]" />,
    title: 'Advanced Analytics',
    description: 'Generate detailed historical performance reports'
  },
  {
    icon: <Clock className="h-8 w-8 text-[#7E69AB]" />,
    title: 'Incident Timeline',
    description: 'Detailed incident history with automatic resolution'
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-[#6E59A5]" />,
    title: 'Real-time Updates',
    description: 'Instant synchronization across all metrics'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 relative bg-black overflow-hidden">
      <div className="shooting-stars absolute inset-0 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
          <p className="text-xl text-gray-400">An Open Source Full-Stack Monitoring System Platform, Delivered with Precision</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group h-full">
              <div className="h-full p-6 rounded-lg bg-black/80 backdrop-blur-3xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
