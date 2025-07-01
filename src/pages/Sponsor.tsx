
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sponsors from '../components/Sponsors';
import { Heart, Star, Users, Zap, Gift, MessageCircle, Crown, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Sponsor = () => {
  const sponsorshipTiers = [
    {
      name: "Bronze Sponsor",
     // price: "$10/month",
      icon: Award,
      benefits: [
        "Logo on our website",
        "Monthly progress updates",
        "Priority bug fixes",
        "Community Discord access"
      ],
      color: "bg-amber-600"
    },
    {
      name: "Silver Sponsor",
    //  price: "$50/month",
      icon: Star,
      benefits: [
        "All Bronze benefits",
        "Logo in README",
        "Feature request priority",
        "Direct developer contact",
        "Early access to new features"
      ],
      color: "bg-gray-400"
    },
    {
      name: "Gold Sponsor",
    //  price: "$100/month",
      icon: Crown,
      benefits: [
        "All Silver benefits",
        "Custom feature development",
        "Monthly video call",
        "Priority support",
        "Company spotlight"
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
            <br/> Improving the open-source ecosystem
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Help us build the future of infrastructure monitoring. Your sponsorship enables us to maintain, 
            improve, and expand CheckCle for the entire community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3"
              onClick={() => window.open('https://github.com/sponsors/checkcle', '_blank')}
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
                    onClick={() => window.open('https://github.com/sponsors/checkcle', '_blank')}
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
              <div className="text-4xl font-bold text-emerald-400 mb-2">7000+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">5+</div>
              <div className="text-gray-300">Contributors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="text-gray-300">Demo Uptime</div>
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