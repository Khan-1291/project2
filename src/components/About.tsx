import React from 'react';
import { MapPin, Coffee, Code, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const About = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Code },
    { number: '2+', label: 'Years Experience', icon: Coffee },
    { number: '20+', label: 'Happy Clients', icon: Heart },
    { number: '1', label: 'Beautiful City', icon: MapPin }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br bg-[#1d2738] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-5xl font-bold text-white mb-6">About Me</h2>
            <div className="space-y-4 text-white leading-relaxed">
              <p className="text-lg">
                I'm a passionate front-end developer based in the beautiful city of{' '}
                <span className="font-semibold text-blue-600">{personalInfo.location}</span>,
                where tradition meets innovation. My journey in web development began with curiosity
                and has evolved into a deep love for creating digital experiences that matter.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest design trends, contributing to
                open-source projects, or enjoying the scenic beauty of Khyber Pakhtunkhwa. I believe
                in building not just websites, but digital experiences that connect with people and
                solve real problems.
              </p>
              <p>
                My approach combines technical expertise with creative vision, ensuring every project
                is both functionally robust and visually stunning. I'm always eager to take on new
                challenges and collaborate with teams who share my passion for excellence.
              </p>
            </div>

            <div className="mt-8 flex items-center space-x-2 text-green-600">
              <MapPin size={20} className="text-blue-600" />
              <span>Currently based in {personalInfo.location}</span>
            </div>
          </div>

          {/* Stats & Visual */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                    <stat.icon size={24} className="text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 text-white animate-fade-in-up delay-500">
              <blockquote className="text-lg italic mb-4">
                "Code is poetry written for machines to understand and humans to appreciate."
              </blockquote>
              <cite className="text-cyan-200 font-medium">— My development philosophy</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;