import React from 'react';
import { Heart, Code } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 mb-6"
          >
            ↑
          </button>
          
          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-4">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 fill-current animate-pulse" />
            
           {/* <Code size={16} className="text-blue-400" />*/}
  
            <span>by {personalInfo.name}</span>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          
          <p className="text-gray-600 text-xs mt-2">
            Based in {personalInfo.location}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;