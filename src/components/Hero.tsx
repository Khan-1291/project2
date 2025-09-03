import React from 'react';
import { Github, Linkedin, Mail, MessageSquare, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import zkcv from '../images/ZohaibKhan.pdf'

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const downloadcv=()=>{
    const link = document.createElement("a");
    link.href=zkcv
    link.download='ZohaibKhan.pdf'
    link.click()

  }

  return (
    <section id="home" className="min-h-screen mt-10 pt-20 relative overflow-hidden bg-[#1d2738] ">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <div className="text-white">
            <div className="animate-fade-in-up">
              <p className="text-cyan-300 font-medium mb-2 tracking-wide">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl md:text-3xl text-cyan-100 mb-6 font-light">
                {personalInfo.title}
              </h2>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                {personalInfo.tagline}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mb-8 animate-fade-in-up delay-300">
              <a
                href={personalInfo.social.github}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
              <a
                href={personalInfo.social.whatsapp}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare size={24} />
              </a>


            </div>
            <button
              onClick={downloadcv}
              className="inline-flex mt-1 items-center px-8 gap-4 mr-4 py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-cyan-100 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up delay-500"
            >
              Download My CV
              
            </button>

            {/* CTA Button */}
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center px-8 py-4 mt-1 bg-white text-blue-600 font-semibold rounded-full hover:bg-cyan-100 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up delay-500"
            >
              Explore My Work
              <ArrowDown className="ml-2" size={20} />
            </button>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up delay-700">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-500">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400 rounded-full blur-xl opacity-40 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;