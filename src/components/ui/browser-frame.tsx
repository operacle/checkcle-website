import React from 'react';

interface BrowserFrameProps {
  url: string;
  children: React.ReactNode;
}

export const BrowserFrame = ({ url, children }: BrowserFrameProps) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-2xl">
      <div className="bg-gray-800 rounded-t-lg p-3 flex items-center space-x-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center">
          <div className="bg-gray-700 rounded px-3 py-1 inline-block">
            <span className="text-gray-300 text-sm">{url}</span>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};