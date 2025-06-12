import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/portfolioData';

const Experience: React.FC = () => {
  const getCompanyLogo = (company: string) => {
    if (company.includes('PT Inovasi Lentera Cipta Kreasi')) {
      return (
        <div className="w-12 h-12 rounded-lg flex items-center justify-center">
          <img
              src="https://github.com/AbrisamYuhartono/Portofolio/blob/main/Media/Inovasi%20Lentera%20Kreasi.png?raw=true"
              alt="Inovasi Lentera Cipta Kreasi Logo"
              className="w-12 h-12 object-contain rounded-lg"
          />        
        </div>
      );
    } else if (company.includes('IME FTUI')) {
      return (
        <div className="w-12 h-12 rounded-lg flex items-center justify-center">
        <img
            src="https://github.com/AbrisamYuhartono/Portofolio/blob/main/Media/IME.png?raw=true"
            alt="Inovasi Lentera Cipta Kreasi Logo"
            className="w-12 h-12 object-contain rounded-lg"
          />           
        </div>
      );
    }
    return (
      <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center">
        <Briefcase className="h-6 w-6 text-white" />
      </div>
    );
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            My journey in data science, research, and development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-teal-600"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-white border-4 border-blue-600 rounded-full 
                              flex items-center justify-center shadow-lg z-10">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>

                {/* Experience Card */}
                <div className="ml-8 flex-1">
                  <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 shadow-lg 
                                hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start space-x-4 mb-4">
                      {/* Company Logo */}
                      <div className="flex-shrink-0">
                        {getCompanyLogo(experience.company)}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {experience.title}
                        </h3>
                        <p className="text-blue-600 font-semibold text-lg mb-3">
                          {experience.company}
                        </p>
                        <div className="flex items-center text-gray-600 space-x-4">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {experience.period}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;