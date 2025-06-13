import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Cpu, Server, Database } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Link } from 'react-router-dom';

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

  const getProjectImage = (projectId: string) => {
    const imageMap: { [key: string]: string } = {
      'jbus': 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
      'eco-construct': 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
      'fishhaven': 'https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=400',
      'hotel-booking': 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400',
      'myfinance': 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400'
    };
    return imageMap[projectId] || 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400';
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-sky-200 via-white to-indigo-200">
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
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={getProjectImage(project.id)}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium 
                                 ${getCategoryColor(project.category)} backdrop-blur-sm`}>
                    {getCategoryIcon(project.category)}
                    <span className="ml-2">{project.category}</span>
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 
                             transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.short_description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
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

                {/* Project Actions */}
                <div className="flex space-x-3">
                  <Link
                    to={`/projects/${project.id}`}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 
                               text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 
                               transform hover:scale-105"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Link>
                  <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 border border-gray-300 
                                 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 
                                 transition-colors duration-200 transform hover:scale-105"
                    >
                      <Github className="h-4 w-4" />
                      </a>
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