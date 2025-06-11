import React from 'react';
import { 
  Code, 
  Database, 
  Brain, 
  Users, 
  Clock, 
  Target,
  Cpu,
  Globe
} from 'lucide-react';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'C/C++', level: 85, icon: <Code className="h-5 w-5" /> },
    { name: 'Python', level: 90, icon: <Code className="h-5 w-5" /> },
    { name: 'Java', level: 80, icon: <Code className="h-5 w-5" /> },
    { name: 'JavaScript', level: 85, icon: <Globe className="h-5 w-5" /> },
    { name: 'React', level: 85, icon: <Globe className="h-5 w-5" /> },
    { name: 'SQL', level: 80, icon: <Database className="h-5 w-5" /> },
    { name: 'MongoDB', level: 75, icon: <Database className="h-5 w-5" /> },
    { name: 'ESP32/Arduino', level: 80, icon: <Cpu className="h-5 w-5" /> }
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: <Brain className="h-6 w-6" /> },
    { name: 'Time Management', icon: <Clock className="h-6 w-6" /> },
    { name: 'Attention to Detail', icon: <Target className="h-6 w-6" /> },
    { name: 'Team Leadership', icon: <Users className="h-6 w-6" /> }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Technical proficiencies and professional competencies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Code className="h-7 w-7 text-blue-600 mr-3" />
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md 
                                         transition-shadow duration-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-blue-600">{skill.icon}</div>
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full 
                               transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="h-7 w-7 text-teal-600 mr-3" />
              Soft Skills
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md 
                                         transition-all duration-200 transform hover:-translate-y-1 
                                         text-center group">
                  <div className="text-teal-600 mb-4 flex justify-center group-hover:scale-110 
                               transition-transform duration-200">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-teal-600 
                               transition-colors duration-200">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>

            {/* Tools & Technologies */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-4">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'Tableau', 'Looker', 'Microsoft Excel', 'Orange', 'Google Suite',
                  'Proteus', 'Tinkercad', 'Node.js', 'PostgreSQL', 'Git'
                ].map((tool, index) => (
                  <span key={index} className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full 
                                             text-sm hover:bg-blue-100 hover:text-blue-800 
                                             transition-colors duration-200 cursor-default">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;