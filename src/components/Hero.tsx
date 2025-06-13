import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { smoothScrollTo } from '../utils/smoothScroll';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-sky-200 via-white to-indigo-200 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        {/* Profile Image */}
        <div className="flex justify-center mt-12">
          <div className="w-48 h-72 rounded-full bg-gradient-to-br from-blue-600 to-teal-600 
                          flex items-center justify-center shadow-xl overflow-hidden">
            <img
              src="https://github.com/AbrisamYuhartono/Portofolio/blob/main/Media/Muhammad%20Abrisam%20Cahyo%20Juhartono_Teknik%20Komputer.jpg?raw=true"
              alt="Muhammad Abrisam Cahyo Juhartono"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Muhammad Abrisam
            <br />
            <span className="text-blue-600">Cahyo Juhartono</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Computer Engineering Student | Web & Mobile Developer | IoT & Data Enthusiast
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => smoothScrollTo('about')}
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 
                     transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Learn More About Me
          </button>
          <button
            onClick={() => smoothScrollTo('contact')}
            className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium 
                     hover:border-blue-600 hover:text-blue-600 transform hover:scale-105 
                     transition-all duration-200"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-6 pt-2">
          <a
            href="mailto:abrisam.yuhartono@gmail.com"
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg text-gray-600 
                     hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammadabrisamcahyojuhartono"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg text-gray-600 
                     hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/AbrisamYuhartono"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg text-gray-600 
                     hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => smoothScrollTo('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
      </button>
    </section>
  );
};

export default Hero;
