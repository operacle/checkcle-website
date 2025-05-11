
import React from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { AlertCircle } from 'lucide-react';
import { Squares } from "@/components/ui/squares-background";

const challenges = [
  {
    title: "Unclear Performance Monitoring",
    description: "Difficulty tracking server and service health.",
    details: "Traditional monitoring solutions often provide complex, hard-to-interpret data that makes it challenging to understand your system's true health status. ReamStack simplifies this with clear, actionable insights."
  },
  {
    title: "Delayed Issue Resolution",
    description: "Slow alerts and outdated data hinder responses.",
    details: "When problems arise, every second counts. Delayed notifications and stale data can lead to extended downtime and frustrated users. Our real-time alerts ensure you're always the first to know."
  },
  {
    title: "SSL and Uptime Risks",
    description: "Missed SSL expirations and unreliable uptime tracking.",
    details: "SSL certificate expiration and downtime can severely impact your business. Our proactive monitoring prevents these issues before they affect your users."
  },
  {
    title: "Inefficient Data Management",
    description: "Complex handling and lack of customization.",
    details: "Managing monitoring data shouldn't be a full-time job. ReamStack's intuitive interface and customizable dashboards make data management effortless."
  },
  {
    title: "Incomplete Insights",
    description: "Gaps in historical data and incident tracking.",
    details: "Without comprehensive historical data and incident tracking, it's impossible to identify patterns and prevent future issues. Our platform maintains detailed records for better decision-making."
  },
  {
    title: "Limited User Management",
    description: "Lack of multi-user roles and permissions for collaboration.",
    details: "Team collaboration is essential for effective monitoring. ReamStack's robust user management system ensures everyone has the access they need while maintaining security."
  },
  {
    title: "Rigid Notification Systems",
    description: "No support for multiple alert templates and delivery channels.",
    details: "Different issues require different responses. Our flexible notification system lets you customize alerts and delivery methods for each scenario."
  },
  {
    title: "Accessibility Challenges",
    description: "Free and open-source alternatives are scarce.",
    details: "Quality monitoring shouldn't be a luxury. ReamStack provides enterprise-level features in an accessible, open-source package."
  }
];

const Challenges = () => {
  return (
    <section id="why-checkcle" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Squares 
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333" 
          hoverFillColor="#222"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">CheckCle App</h2>
          <p className="text-xl text-[#FEF7CD]">Challenges We Solve</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => (
            <HoverCard key={index} openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <div className="group h-full">
                  <div className="relative h-full rounded-lg border border-gray-800 hover:shadow-[0_0_2rem_-0.5rem_#fff8] transition duration-300">
                    <div className="relative h-full p-4 rounded-lg bg-black/70 backdrop-blur-3xl">
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="w-5 h-5 text-[#FEF7CD] mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-white">{challenge.title}</h3>
                          <p className="text-sm text-gray-400">{challenge.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-black text-white border-gray-700">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-[#FEF7CD]">{challenge.title}</h4>
                  <p className="text-sm text-gray-300">{challenge.details}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
