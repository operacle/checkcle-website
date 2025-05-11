import React from 'react';

const WhyVite = () => {
  return (
    <section id="why-vite" className="py-20 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Vite?</h2>
          <p className="text-xl text-gray-400">The problems Vite solves and why it exists.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">The Problems</h3>
            <div className="space-y-4">
              <p className="text-gray-400">
                When you run dev, a dev server starts in a few hundred milliseconds at most.
                When you edit a file, the changes reflect in the browser instantly.
              </p>
              <p className="text-gray-400">
                When you build for production, Vite ships highly optimized builds with multi-page 
                and library mode support.
              </p>
            </div>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg">
            <pre className="text-gray-300 overflow-x-auto">
              <code>{`// Before: bundle based dev server
$ dev server start > 2000ms

// After: native ESM based dev server
$ dev server start < 300ms`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVite;