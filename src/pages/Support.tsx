
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MessageCircle, Book, Github, Mail, HelpCircle, Bug, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Support = () => {
  const supportOptions = [
    {
      title: "Community Discord",
      description: "Join our active community for real-time help and discussions",
      icon: MessageCircle,
      action: "Join Discord",
      link: "https://discord.gg/xs9gbubGwX",
      color: "bg-indigo-500"
    },
    {
      title: "Documentation",
      description: "Comprehensive guides, tutorials, and API documentation",
      icon: Book,
      action: "View Docs",
      link: "https://docs.checkcle.io",
      color: "bg-emerald-500"
    },
    {
      title: "GitHub Issues",
      description: "Report bugs, request features, or browse existing issues",
      icon: Github,
      action: "Open Issue",
      link: "https://github.com/operacle/checkcle/issues",
      color: "bg-gray-700"
    },
    {
      title: "Email Support",
      description: "Direct support for sponsors and enterprise users",
      icon: Mail,
      action: "Contact Us",
      link: "mailto:hello@checkcle.io",
      color: "bg-blue-500"
    }
  ];

  const faqItems = [
    {
      question: "How do I get started with CheckCle?",
      answer: "Check out our Getting Started guide in the documentation. You can also use our Docker Compose setup for quick deployment."
    },
    {
      question: "Is CheckCle free to use?",
      answer: "Yes! CheckCle is completely open-source and free to use. Sponsorship helps us maintain and improve the project."
    },
    {
      question: "What monitoring features are included?",
      answer: "CheckCle includes uptime monitoring, server monitoring, status pages, analytics, and customizable alerts."
    },
    {
      question: "Can I contribute to the project?",
      answer: "Absolutely! We welcome contributions. Check our GitHub repository for contribution guidelines and open issues."
    },
    {
      question: "How do I report a bug?",
      answer: "Please create an issue on our GitHub repository with detailed information about the bug and steps to reproduce it."
    },
    {
      question: "Do you offer enterprise support?",
      answer: "Yes, we offer dedicated support for enterprise users and sponsors. Contact us for more information."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-black via-[#020617] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Get Support
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Need help with CheckCle? We're here to assist you. Choose from our various support channels 
            to get the help you need.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Support Channels</h2>
            <p className="text-xl text-gray-400">Multiple ways to get the help you need</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="bg-white/5 border-gray-800 hover:bg-white/10 transition-colors">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-full ${option.color} flex items-center justify-center mb-4`}>
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{option.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
                    onClick={() => window.open(option.link, '_blank')}
                  >
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Common questions and answers about CheckCle</p>
          </div>
          
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="bg-white/5 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white text-lg flex items-center">
                    <HelpCircle className="w-5 h-5 text-emerald-400 mr-3" />
                    {item.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Quick Actions</h2>
            <p className="text-xl text-gray-400">Common support tasks made easy</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-gray-800 hover:bg-white/10 transition-colors text-center">
              <CardHeader>
                <Bug className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <CardTitle className="text-white">Report a Bug</CardTitle>
                <CardDescription className="text-gray-300">
                  Found an issue? Let us know so we can fix it.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-red-500 hover:bg-red-600 text-white"
                  onClick={() => window.open('https://github.com/operacle/checkcle/issues/new?template=bug_report.md', '_blank')}
                >
                  Report Bug
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-gray-800 hover:bg-white/10 transition-colors text-center">
              <CardHeader>
                <Lightbulb className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <CardTitle className="text-white">Feature Request</CardTitle>
                <CardDescription className="text-gray-300">
                  Have an idea? Share it with us!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white"
                  onClick={() => window.open('https://github.com/operacle/checkcle/issues/new?template=feature_request.md', '_blank')}
                >
                  Request Feature
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-gray-800 hover:bg-white/10 transition-colors text-center">
              <CardHeader>
                <MessageCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-white">General Question</CardTitle>
                <CardDescription className="text-gray-300">
                  Need help with something specific?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={() => window.open('https://github.com/operacle/checkcle/discussions', '_blank')}
                >
                  Ask Question
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Still Need Help?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Can't find what you're looking for? Reach out to us directly.
          </p>
          
          <div className="bg-white/5 rounded-2xl p-8 border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Support</h3>
                <p className="text-gray-300 mb-4">
                  Dedicated support for enterprise users and sponsors with priority response times.
                </p>
                <Button 
                  className="bg-emerald-500 hover:bg-emerald-600 text-white"
                  onClick={() => window.open('mailto:enterprise@checkcle.io', '_blank')}
                >
                  Contact Enterprise
                </Button>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">General Inquiries</h3>
                <p className="text-gray-300 mb-4">
                  Questions about partnerships, media inquiries, or general information.
                </p>
                <Button 
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={() => window.open('mailto:hello@checkcle.io', '_blank')}
                >
                  General Contact
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

export default Support;