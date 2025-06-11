import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>and</span>
            <Code className="h-4 w-4 text-blue-400" />
            <span>by Muhammad Abrisam Cahyo Juhartono</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Muhammad Abrisam Cahyo Juhartono. All rights reserved.
          </div>
          
          <div className="text-gray-500 text-xs">
            Computer Engineering Student | University of Indonesia
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;