import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/portfolioData';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="p-6">Project not found.</div>;
  }

  return (
    <div className="min-h-screen py-20 px-6 max-w-4xl mx-auto bg-white">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
      <img
        src="https://via.placeholder.com/800x400" // ← Placeholder image
        alt={project.title}
        className="rounded-lg w-full mb-6"
      />
      <p className="text-lg text-gray-700 mb-4">{project.description}</p>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Technologies Used:</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-blue-600 hover:underline"
      >
        View on GitHub →
      </a>
    </div>
  );
};

export default ProjectDetail;
