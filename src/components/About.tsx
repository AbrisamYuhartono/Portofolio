import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600 leading-relaxed text-justify">
              <p>
                I am an undergraduate Computer Engineering student at Universitas Indonesia with a strong passion for both software development and hardware engineering. My academic journey and organizational experiences have shaped me into a versatile, driven individual who strives to bridge the gap between theory and impactful real-world solutions.
              </p>

              <p>
                With hands-on experience in C programming, Arduino, Proteus, and Tinkercad, I have built a solid foundation in embedded systems and circuit design. In parallel, my involvement in full-stack web development projects using React.js, Node.js, and MongoDB has fueled my interest in data analysis, machine learning, and scalable tech solutions.
              </p>

              <p>
                I have developed skills in research, project management, and team leadership through active participation in community initiatives and cross-functional collaborations. Additionally, I am proficient in tools such as Tableau, Looker, Microsoft Excel, Orange, and Google Suite, enabling me to analyze and visualize data effectively.
              </p>

              <p>
                I am eager to keep learning, innovating, and collaborating with like-minded peers on projects that challenge the status quo in the evolving fields of computer engineering and data science.
              </p>

            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <GraduationCap className="h-7 w-7 text-blue-600 mr-3" />
                Education
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  {/* University Logo Placeholder */}
                  <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center flex-shrink-0">
                     <img
                        src="https://github.com/AbrisamYuhartono/Portofolio/blob/main/Media/UI.png?raw=true"
                        alt="Universitas Indonesia Logo"
                        className="w-12 h-12 object-contain rounded-lg"
                      />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900">
                      Bachelor of Engineering in Computer Engineering
                    </h4>
                    <p className="text-blue-600 font-medium">Universitas Indonesia</p>
                    <div className="flex items-center text-gray-600 mt-2 space-x-4">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        2022 - Present
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        Depok, Indonesia
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
                <div className="text-2xl font-bold text-blue-600">10+</div>
                <div className="text-gray-600 text-sm">Certifications</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
                <div className="text-2xl font-bold text-teal-600">5+</div>
                <div className="text-gray-600 text-sm">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;