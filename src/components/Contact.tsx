import React from 'react';
import { Mail, Linkedin, MapPin, Phone, Send, ArrowRight } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

const Contact: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  const handleLinkedInClick = () => {
    window.open(contactInfo.linkedin, '_blank', 'noopener,noreferrer');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to collaborate or discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-blue-100 leading-relaxed mb-8">
                Whether you're looking for a dedicated team member, a project collaborator, 
                or just want to connect with a fellow tech enthusiast, I'm always open to 
                meaningful conversations and new opportunities.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div 
                onClick={handleEmailClick}
                className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl 
                         hover:bg-white/20 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center 
                              group-hover:scale-110 transition-transform duration-200">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Email</p>
                  <p className="text-blue-100">{contactInfo.email}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-blue-300 group-hover:translate-x-1 
                                   transition-transform duration-200" />
              </div>

              {/* LinkedIn */}
              <div 
                onClick={handleLinkedInClick}
                className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl 
                         hover:bg-white/20 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center 
                              group-hover:scale-110 transition-transform duration-200">
                  <Linkedin className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-blue-100">Connect with me professionally</p>
                </div>
                <ArrowRight className="h-5 w-5 text-blue-300 group-hover:translate-x-1 
                                   transition-transform duration-200" />
              </div>

              {/* Phone */}
              <div 
                onClick={handlePhoneClick}
                className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl 
                         hover:bg-white/20 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center 
                              group-hover:scale-110 transition-transform duration-200">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Phone</p>
                  <p className="text-blue-100">{contactInfo.phone}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-blue-300 group-hover:translate-x-1 
                                   transition-transform duration-200" />
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Location</p>
                  <p className="text-blue-100">{contactInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center lg:text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 
                            rounded-full flex items-center justify-center mx-auto lg:mx-0">
                <Send className="h-10 w-10 text-white" />
              </div>
              
              <div>
                <h4 className="text-2xl font-bold mb-4">Ready to Start a Conversation?</h4>
                <p className="text-blue-100 mb-6">
                  I'm currently open to new opportunities, collaborations, and interesting projects. 
                  Let's discuss how we can work together to create something amazing!
                </p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleEmailClick}
                  className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 
                           text-gray-900 font-bold rounded-xl hover:from-yellow-500 hover:to-orange-600 
                           transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Send Me an Email
                </button>
                
                <button
                  onClick={handleLinkedInClick}
                  className="w-full px-8 py-4 border-2 border-white/30 text-white font-bold 
                           rounded-xl hover:bg-white/10 transform hover:scale-105 
                           transition-all duration-200"
                >
                  Connect on LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;