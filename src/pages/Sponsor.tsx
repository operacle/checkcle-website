
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sponsors from '../components/Sponsors';
import { Heart, Star, Users, Zap, Gift, MessageCircle, Crown, Award, HandIcon, OrbitIcon, ServerCogIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Sponsor = () => {
  const sponsorshipTiers = [
        {
      name: "Supporter ",
     // price: "$10/month",
      icon: HandIcon,
      benefits: [
        "Perfect for individuals who want to show appreciation and be part of our journey.",
        "Your name/logo listed on our README (Supporter section)",
        "Access to our Community Discord",
      ],
      color: "bg-amber-600"
    },
    
    {
      name: "Bronze Sponsor",
     // price: "$10/month",
      icon: Award,
      benefits: [
        "Great for early adopters and friends of the project who want to help it grow.",
        "Your name/logo listed on our README (Bronze section)",
        "Display on Website Sponsor Page",
        "Access to our Community Discord",
        "Monthly project update email",
      ],
      color: "bg-amber-600"
    },
    {
      name: "Silver Sponsor",
    //  price: "$50/month",
      icon: Star,
      benefits: [
        "Ideal for community champions and teams who believe in open collaboration.",
        "Your name/logo listed on our README (Silver section, higher priority than Bronze)",
        "Display on Website Sponsor Page",
        "Priority consideration of feature requests",
        "Early access to beta features and releases",
        "Access to our Community Discord",
        "Monthly project updates",
      ],
      color: "bg-gray-400"
    },
    {
      name: "Gold Sponsor",
    //  price: "$100/month",
      icon: Crown,
      benefits: [
        "For organizations and contributors committed to sustaining open-source innovation.",
        "Your name/logo listed on our README (Gold section, top group)",
        "Display on Website Sponsor Page",
        "Display on Website Main Hero Area (lower position)",
        "Early access to new features",
        "Company spotlight in project updates",
        "Access to our Community Discord",
      ],
      color: "bg-yellow-500"
    },
    {
      name: "Platinum Sponsor",
    //  price: "$100/month",
      icon: OrbitIcon,
      benefits: [
        "For visionary partners who want to shape the project’s future together.",
        "Display Name/Logo on README (Platinum section, top priority))",
        "Display on Website Sponsor Page",
        "Display on Website Main Hero Area (prominent position)",
        "Dedicated support channel (Slack/Discord)",
        "Company spotlight blog post & social media",
        "Early access to new releases and security patches",
        "Access to our Community Discord",
      ],
      color: "bg-yellow-500"
    },
    {
      name: "Community & Custom Sponsor",
    //  price: "$100/month",
      icon: ServerCogIcon,
      benefits: [
        "For developer communities, tech media, infrastructure providers, or organizations supporting us in non-monetary ways.",
        "Display your name/logo listed on our README (Community Partners section)",
        "Display on Website Sponsor Page (Community Partners section)",
        "Shoutout on social media and project updates",
        "Eligible to co-host community events and webinars",
        "Early access to community-focused features",
        "Access to our Community Discord",
      ],
      color: "bg-yellow-500"
    }
  ];

  const communityFeatures = [
    {
      title: "Open Source Development",
      description: "All contributions go directly to improving the open-source CheckCle ecosystem",
      icon: Users
    },
    {
      title: "Community Support",
      description: "Help us provide better documentation, tutorials, and community resources",
      icon: MessageCircle
    },
    {
      title: "Innovation Fund",
      description: "Support research and development of new monitoring and automation features",
      icon: Zap
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-black via-[#020617] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 text-emerald-400 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Support CheckCle 
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Help us build the future of infrastructure monitoring. Your sponsorship enables us to maintain, 
            improve, and expand CheckCle for the entire community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3"
              onClick={() => window.open('https://github.com/sponsors/tolaleng', '_blank')}
            >
              <Heart className="w-5 h-5 mr-2" />
              Become a Sponsor
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-600 text-black hover:bg-gray-200 px-8 py-3"
              onClick={() => window.open('https://opencollective.com/checkcle', '_blank')}
            >
              One-time Donation
            </Button>
          </div>
        </div>
      </section>
          {/* Our Mission */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/5 rounded-2xl p-8 border border-gray-800">
            <p className="text-lg text-gray-300 leading-relaxed">
              We are a self-funded startup and rely on your support to keep this project going. Your support allows us to focus on real users like you, rather than on investors or revenue. This work is possible because of your help, we build it, and you make it sustainable. If you choose our self-hosted, you can also support us through donations.
            </p>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <Sponsors />

      {/* Why Sponsor Section */}
      <section className="py-20 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Sponsor CheckCle?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your sponsorship directly impacts the development and sustainability of CheckCle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityFeatures.map((feature, index) => (
              <Card key={index} className="bg-white/5 border-gray-800 hover:bg-white/10 transition-colors">
                <CardHeader>
                  <feature.icon className="w-8 h-8 text-emerald-400 mb-2" />
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Sponsorship Tiers</h2>
            <p className="text-xl text-gray-400">Choose a sponsorship level that works for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <Card key={index} className="bg-white/5 border-gray-800 hover:bg-white/10 transition-colors relative">
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 rounded-full ${tier.color} flex items-center justify-center mx-auto mb-4`}>
                    <tier.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl">{tier.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-emerald-400">{tier.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600 text-white"
                    onClick={() => window.open('https://github.com/sponsors/tolaleng', '_blank')}
                  >
                    Choose {tier.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Community Impact</h2>
            <p className="text-xl text-gray-400">How your sponsorship makes a difference</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">10K+ Deployed</div>
              <div className="text-gray-300">Empowering a growing community with reliable tools and support.</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">Contributors</div>
              <div className="text-gray-300">Passionate developers and contributors driving continuous improvements.</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">Driving Progress</div>
              <div className="text-gray-300">Ensuring performance, reliability, and peace of mind around the clock.</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">Delivering</div>
              <div className="text-gray-300">Demonstrating our commitment to stability and trustworthiness.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Requests */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Feature Requests</h2>
            <p className="text-xl text-gray-400 mb-8">
              Sponsors get priority on feature requests and can influence our roadmap
            </p>
          </div>
          
          <div className="bg-white/5 rounded-2xl p-8 border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Upcoming Features</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <Gift className="w-5 h-5 text-emerald-400 mr-3" />
                    Advanced Analytics Dashboard
                  </li>
                  <li className="flex items-center">
                    <Gift className="w-5 h-5 text-emerald-400 mr-3" />
                    Distributed Regional Cloud
                  </li>
                  <li className="flex items-center">
                    <Gift className="w-5 h-5 text-emerald-400 mr-3" />
                    AI-Powered Alerts
                  </li>
                  <li className="flex items-center">
                    <Gift className="w-5 h-5 text-emerald-400 mr-3" />
                    Multi-Region Monitoring
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Request a Feature</h3>
                <p className="text-gray-300 mb-4">
                  Have an idea for CheckCle? Sponsors can submit feature requests directly to our development team.
                </p>
                <Button 
                  className="bg-emerald-500 hover:bg-emerald-600 text-white"
                  onClick={() => window.open('https://github.com/operacle/checkcle/issues/new', '_blank')}
                >
                  Submit Feature Request
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sponsor;