import React, { useState, useEffect, useRef } from 'react';
import { skills } from '../data/portfolio';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CircularProgress = ({ skill, index }: { skill: typeof skills[0], index: number }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (skill.level / 100) * circumference;

    return (
      <div 
        className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{skill.icon}</span>
            <h3 className="font-semibold text-gray-900">{skill.name}</h3>
          </div>
          <span className="text-2xl font-bold text-blue-600">{skill.level}%</span>
        </div>

        <div className="relative w-24 h-24 mx-auto mb-4">
       <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
  <circle
    cx="50"
    cy="50"
    r={radius}
    stroke="#e5e7eb"
    strokeWidth="8"
    fill="transparent"
  />
  <circle
    cx="50"
    cy="50"
    r={radius}
    stroke="#2563eb"
    strokeWidth="8"
    fill="transparent"
    strokeDasharray={circumference}
    strokeDashoffset={isVisible ? strokeDashoffset : circumference}
    strokeLinecap="round"
    style={{
      transition: "stroke-dashoffset 1s ease-out",
      transformOrigin: "50% 50%",
    }}
  />
</svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-gray-700">{skill.level}%</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 text-center leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {skill.description}
        </p>
      </div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20  bg-[#1d2738] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Passionate about modern web technologies and creating exceptional user experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`animate-fade-in-up ${isVisible ? 'animate-visible' : ''  }bg-gray-800 rounded-2xl p-6 shadow-lg`}
            >
              <CircularProgress skill={skill} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;