
import React from 'react';

const NotificationSystem = () => {
  const notificationChannels = [
    {
      name: "Email",
      logo: "/uploads/notification/email.png",
      alt: "Email notifications"
    },
    {
      name: "Google Chat",
      logo: "/uploads/notification/google.png", 
      alt: "SMS notifications"
    },
    {
      name: "Slack",
      logo: "/uploads/notification/slack.png",
      alt: "Slack notifications"
    },
    {
      name: "Discord",
      logo: "/uploads/notification/discord.png",
      alt: "Discord notifications"
    },
    {
      name: "Telegram",
      logo: "/uploads/notification/telegram.png",
      alt: "Telegram notifications"
    },
    {
      name: "Signal",
      logo: "/uploads/notification/signal.png",
      alt: "Signal notifications"
    },
    {
      name: "Webhook",
      logo: "/uploads/notification/webhook.png",
      alt: "Webhook notifications"
    },
  ];

  return (
    <section className="py-20 relative bg-black overflow-hidden">
      <div className="shooting-stars absolute inset-0 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Static grid of logos */}
          <div className="relative flex justify-center items-center">
            <div className="grid grid-cols-4 gap-6 w-full max-w-2xl">
              {notificationChannels.map((channel) => (
                <div
                  key={channel.name}
                  className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/30 rounded-xl p-4 flex flex-col items-center justify-center hover:from-emerald-900/20 hover:to-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/10"
                >
                 <div className="w-12 h-12 mb-2 flex items-center justify-center">
                    <img
                      src={channel.logo}
                      alt={channel.alt}
                      className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-400 group-hover:text-emerald-400 transition-colors duration-300 text-center">
                    {channel.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Notification System
              </h2>
              <p className="text-lg md:text-xl text-gray-400 mb-8">
                Stay informed instantly with our comprehensive multi-channel notification system. 
                Get alerts through your preferred communication channels the moment issues are detected.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Multi-Channel Delivery</h3>
                  <p className="text-gray-400">
                    Send notifications via Email, Slack, Discord, Telegram, Signal, Google Chat, and custom webhooks.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Smart Escalation</h3>
                  <p className="text-gray-400">
                    Automatic escalation policies ensure critical alerts reach the right people at the right time.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Custom Templates</h3>
                  <p className="text-gray-400">
                    Personalize notification content with custom templates and dynamic variables for each channel.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Delivery Tracking</h3>
                  <p className="text-gray-400">
                    Monitor notification delivery status and get insights into your team's response times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationSystem;