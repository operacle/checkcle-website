
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    id: "item-1",
    question: "What is CheckCle?",
    answer: "CheckCle is an open-source monitoring and uptime checking system that helps you monitor websites, APIs, servers, and services from multiple regions in real-time."
  },
  {
    id: "item-2",
    question: "Is CheckCle free to use?",
    answer: "Yes, CheckCle is completely free and open source. You can self-host or contribute to its development."
  },

  {
    id: "item-4",
    question: "Can CheckCle perform checks from multiple locations?",
    answer: "Yes, with Distributed Regional Agents, CheckCle can perform checks from various geographical regions."
  },
  {
    id: "item-5",
    question: "How do I install CheckCle?",
    answer: "You can install CheckCle using Docker, or run it manually https://github.com/operacle/checkcle."
  },
  {
    id: "item-6",
    question: "Does CheckCle require a database?",
    answer: "Yes, CheckCle uses PocketBase as the backend database for storing services, metrics, and user data."
  },
  {
    id: "item-7",
    question: "Is there an official Docker image?",
    answer: "Yes, the official Docker image is available on Docker Hub (link to be provided). You can also build your own from source."
  },

  {
    id: "item-9",
    question: "What are the system requirements to run CheckCle?",
    answer: "A minimal Linux server (1vCPU, 512MB RAM) is enough for small deployments. For distributed setups, more resources are recommended."
  },
  {
    id: "item-10",
    question: "Can I contribute to CheckCle?",
    answer: "Absolutely! Contributions are welcome. Visit the GitHub repository to report issues, suggest features, or contribute code."
  },
{
  id: "item-11",
  question: "Can I donate?",
  answer: (
    <>
      Currently, no. While I truly appreciate the past donations (and remain grateful to everyone who supported the project), I’ve decided to stop accepting financial contributions from individuals.
      If you represent an organization that provides sponsorships or grants and would like to support the ongoing development of CheckCle, feel free to reach out at tolaleng@checkcle.io
    </>
  )
},

  {
    id: "item-12",
    question: "Where can I get support or ask questions?",
    answer: "You can join the community discussions on GitHub, or reach out via discord or social channels."
  }
];

const FAQ = () => {
  // Split FAQ data into pairs for two-column layout
  const faqPairs = [];
  for (let i = 0; i < faqData.length; i += 2) {
    faqPairs.push(faqData.slice(i, i + 2));
  }

  return (
    <section id="faq" className="py-20 relative bg-black overflow-hidden">
      <div className="shooting-stars absolute inset-0 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-400">Everything you need to know about CheckCle - Free & Open Source</p>
        </div>
        
        <div className="bg-black/80 backdrop-blur-3xl border border-gray-800 rounded-xl p-8">
          <div className="space-y-6">
            {faqPairs.map((pair, pairIndex) => (
              <div key={pairIndex} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {pair.map((faq) => (
                  <Accordion key={faq.id} type="single" collapsible className="w-full">
                    <AccordionItem 
                      value={faq.id}
                      className="border border-gray-800 rounded-lg px-6 bg-gray-900/50 hover:bg-gray-900/70 transition-colors"
                    >
                      <AccordionTrigger className="text-left text-white font-medium py-6 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 pb-6 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/operacle/checkcle/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors"
            >
              Ask on GitHub
            </a>
            <a 
              href="https://discord.gg/xs9gbubGwX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors border border-gray-700"
            >
              Join Discord Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;