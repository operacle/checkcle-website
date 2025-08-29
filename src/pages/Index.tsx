
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Challenges from '../components/Challenges';
import Features from '../components/Features';
import Screenshots from '../components/Screenshots';
import TechStack from '../components/TechStack';
import NotificationSystem from '../components/NotificationSystem';
import Installation from '../components/Installation';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Partners />
      <Challenges />
      <Features />
      <Screenshots />
      <NotificationSystem />
      <TechStack />
      <Installation />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;