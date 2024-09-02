import React from 'react';

const projects = [
  {
    title: 'Washlink',
    description: 'WashLink is a mobile application designed to facilitate users in accessing laundry services through nearby washing machines',
    imageUrl: '/assets/pro1.png', 
  },
  {
    title: 'MichuGojo',
    description: 'MichuGojo is a mobile application that streamlines the process of renting homes.',
    imageUrl: '/assets/pro2.png', 
  },
];

const ProjectsShowcase = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-0" id='projects'>
      <p className="text-center text-sm font-medi text-gray-500">Our Projects</p>
      <h2 className="text-center text-3xl font-boldi text-green-600 mb-6">Let's Showcase Our Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="border overflow-hidden shadow-md rounded-lg transition-transform duration-300 hover:scale-105"
          >
            <img 
              className="w-full h-48 object-cover" 
              src={project.imageUrl} 
              alt={project.title} 
            />
            <div className="p-6">
              <h4 className="text-xl font-boldi mb-2">{project.title}</h4>
              <p className="text-gray-700 text-sm font-regi">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsShowcase;
