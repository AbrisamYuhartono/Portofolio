import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Cpu, Server, Database } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Mobile Development':
        return <Smartphone className="h-5 w-5" />;
      case 'Full-Stack Development':
        return <Globe className="h-5 w-5" />;
      case 'IoT Development':
        return <Cpu className="h-5 w-5" />;
      case 'Backend Development':
        return <Server className="h-5 w-5" />;
      default:
        return <Database className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Mobile Development':
        return 'bg-purple-100 text-purple-800';
      case 'Full-Stack Development':
        return 'bg-blue-100 text-blue-800';
      case 'IoT Development':
        return 'bg-green-100 text-green-800';
      case 'Backend Development':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my work in software development, IoT systems, and data analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                       transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Project Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium 
                                 ${getCategoryColor(project.category)}`}>
                    {getCategoryIcon(project.category)}
                    <span className="ml-2">{project.category}</span>
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 
                             transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full 
                               hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Actions */}
              <div className="px-6 pb-6">
                <div className="flex space-x-3">
                  <button className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 
                                   text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 
                                   transform hover:scale-105">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </button>
                  <button className="flex items-center justify-center px-4 py-2 border border-gray-300 
                                   text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 
                                   transition-colors duration-200 transform hover:scale-105">
                    <Github className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;