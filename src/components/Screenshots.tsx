
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScreenshotTabContent from './screenshot-tab-content';

const Screenshots = () => {
  const tabs = [
    {
      value: "uptime",
      label: "Uptime Service Monitoring",
      content: {
        title: "Uptime Monitoring",
        description: "Monitor your website's availability and performance with real-time alerts",
        imageSrc: "/uploads/checkcle-black.png",
        secondaryImage: "https://pub-4a4062303020445f8f289a2fee84f9e8.r2.dev/images/checkcle-detailpage.png",
        url: "checkcle.io/dashboard",
      }
    },
    {
      value: "server",
      label: "Instance Monitoring",
      content: {
        title: "Server Monitoring",
        description: "Track server resources, performance metrics, and system health",
        imageSrc: "/uploads/27e13225-cb75-40fc-9c81-a81838c0698e.png",
        url: "checkcle.io/server/node01",
      }
    },
    {
      value: "ssl",
      label: "SSL & Domain",
      content: {
        title: "SSL & Domain Monitoring",
        description: "Track SSL certificates expiration and domain health status",
        imageSrc: "https://pub-4a4062303020445f8f289a2fee84f9e8.r2.dev/images/ssl-domain.png",
        url: "checkcle.io/ssl",
      }
    },
    {
      value: "incidents",
      label: "Schedule & Incident",
      content: {
        title: "Schedule & Incident",
        description: "Track and manage incidents with detailed timeline and resolution status",
        imageSrc: "https://pub-4a4062303020445f8f289a2fee84f9e8.r2.dev/images/maintenance-dahboard.png",
        secondaryImage: "https://pub-4a4062303020445f8f289a2fee84f9e8.r2.dev/images/incident-dashboard.png",
        url: "checkcle.io/incidents",
      }
    },
    {
      value: "status",
      label: "Operational Status",
      content: {
        title: "Operational Status",
        description: "Public status page showing real-time system health and incidents",
        imageSrc: "/uploads/7eb3d6eb-0fc6-44b7-9d3a-cef744234d5a.png",
        secondaryImage: "/uploads/24d40cba-fc43-491b-8365-d57eb73834d8.png",
        url: "checkcle.io/status",
      }
    },
    {
      value: "reports",
      label: "Reports & Analytics",
      content: {
        title: "Reports & Analytics",
        description: "Comprehensive reports and analytics for data-driven decisions",
        imageSrc: "/uploads/ea115018-2a0d-4dd8-b1bf-f39fcef0b9be.png",
        url: "checkcle.io/reports",
      }
    },
    {
      value: "settings",
      label: "Settings Panel",
      content: {
        title: "Settings Panel",
        description: "Customize your monitoring preferences and notification settings",
        imageSrc: "https://pub-4a4062303020445f8f289a2fee84f9e8.r2.dev/images/mail-settings.png",
        url: "checkcle.io/settings",
      }
    }
  ];

  return (
    <section className="py-20 relative bg-black overflow-hidden">
      <div className="shooting-stars absolute inset-0 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Platform Screenshots</h2>
          <p className="text-lg md:text-xl text-gray-400">Explore our platform's powerful features</p>
        </div>
        
        <Tabs defaultValue="uptime" className="w-full">
          <div className="mb-8 overflow-x-auto scrollbar-hide">
            <TabsList className="inline-flex min-w-max w-full bg-gray-800/50 rounded-lg p-2 gap-2">
              {tabs.map((tab) => (
                <TabsTrigger 
                  key={tab.value}
                  value={tab.value} 
                  className="text-white whitespace-nowrap px-4 py-2 rounded-md transition-all hover:bg-gray-700/50"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <div className="mt-8">
            {tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <ScreenshotTabContent
                  title={tab.content.title}
                  description={tab.content.description}
                  imageSrc={tab.content.imageSrc}
                  secondaryImage={tab.content.secondaryImage}
                  imageAlt={`${tab.content.title} Screenshot`}
                  url={tab.content.url}
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Screenshots;
