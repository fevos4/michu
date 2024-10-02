import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

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
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-0" id="projects">
      <p className="text-center text-sm font-medi text-gray-500">Our Projects</p>
      <h2 className="text-center text-3xl font-boldi text-green-600 mb-6">Let's Showcase Our Projects</h2>

      {/* Grid for Desktop */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <p className="text-gray-700 text-xl font-regi">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Swipeable Section for Mobile */}
      <div {...handlers} className="md:hidden relative mx-auto max-w-full overflow-hidden px-4">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {projects.map((project, index) => (
            <div key={index} className="min-w-full p-4 transition-transform duration-500">
              <div className="border overflow-hidden shadow-md rounded-lg transition-transform duration-300">
                <img className="w-full h-48 object-cover" src={project.imageUrl} alt={project.title} />
                <div className="p-6">
                  <h4 className="text-xl font-boldi mb-2">{project.title}</h4>
                  <p className="text-gray-700 text-xl font-regi">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows for Swiping */}
        <button
          onClick={handlePrev}
          className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full focus:outline-none"
        >
          <IoIosArrowDropleft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full focus:outline-none"
        >
          <IoIosArrowDropright className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
