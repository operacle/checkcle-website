import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BrowserFrame } from './ui/browser-frame';

interface ScreenshotTabContentProps {
  title: string;
  description: string;
  imageSrc: string;
  secondaryImage?: string;
  imageAlt: string;
  url: string;
}

const ScreenshotTabContent = ({ 
  title, 
  description, 
  imageSrc, 
  secondaryImage,
  imageAlt, 
  url 
}: ScreenshotTabContentProps) => {
  return (
    <Card className="border-0 bg-transparent transform transition-all duration-500 hover:scale-[1.02]">
      <CardContent className="p-0">
        <div className="space-y-6">
          <BrowserFrame url={url}>
            <img 
              src={imageSrc} 
              alt={imageAlt} 
              className="w-full object-cover"
              loading="lazy"
            />
          </BrowserFrame>
          
          {secondaryImage && (
            <BrowserFrame url={url}>
              <img 
                src={secondaryImage} 
                alt={`${imageAlt} Additional View`} 
                className="w-full object-cover"
                loading="lazy"
              />
            </BrowserFrame>
          )}
        </div>
        <div className="mt-6 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">{title}</h3>
          <p className="text-gray-400 text-lg">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScreenshotTabContent;