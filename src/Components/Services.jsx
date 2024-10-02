import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const services = [
  {
    title: 'Application Development',
    description: 'Crafting robust and scalable applications tailored to your business needs.',
    imgSrc: '/assets/app.png',
  },
  {
    title: 'Website Development',
    description: 'Building interactive and user-friendly websites to enhance your online presence.',
    imgSrc: '/assets/dev.png',
  },
  {
    title: 'Web Design',
    description: 'Creating visually appealing and intuitive designs for a seamless user experience.',
    imgSrc: '/assets/des.png',
  }
];

const cards = [
  {
    title1: 'Tutorials on Web Development',
    description1: 'Offering comprehensive tutorials to enhance your skills in web development.',
    imgSrc1: '/assets/tutorial.png',
  },
  {
    title1: 'Consultancy',
    description1: 'Providing expert advice and solutions to optimize your technology strategy.',
    imgSrc1: '/assets/cons2.png',
  }
];

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (services.length + cards.length));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (services.length + cards.length)) % (services.length + cards.length));
  };

  return (
    <section className="py-12" id='services'>
      <div className="text-center mb-20">
        <p className="text-sm font-medi text-gray-500">Our Services</p>
        <h2 className="text-3xl font-boldi text-[#00A551]">We Provide The Best Quality</h2>
      </div>

      {/* Grid for Desktop */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-5xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-3xl p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-boldi mb-2">{service.title}</h3>
            <p className="text-gray-600  font-lighti">{service.description}</p>
            <img src={service.imgSrc} alt={service.title} className="h-40 mb-4" />
          </div>
        ))}
      </div>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-2xl mt-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-3xl p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-boldi mb-2">{card.title1}</h3>
            <p className="text-gray-600  font-lighti">{card.description1}</p>
            <img src={card.imgSrc1} alt={card.title1} className="h-40 mb-4" />
          </div>
        ))}
      </div>

      {/* Swipeable Section for Mobile */}
      <div {...handlers} className="md:hidden relative mx-auto max-w-full overflow-hidden px-4">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {services.concat(cards).map((item, index) => (
            <div
              key={index}
              className={`min-w-full p-4 transition-transform duration-500 transform-gpu`}
            >
              <div className="bg-white shadow-lg rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-boldi mb-2">{item.title || item.title1}</h3>
                <p className="text-gray-600 text-xs font-lighti">{item.description || item.description1}</p>
                <img src={item.imgSrc || item.imgSrc1} alt={item.title || item.title1} className="h-40 mb-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Arrows for Swiping */}
        <button
          onClick={handlePrev}
          className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-[#00A551] text-white p-2 rounded-full focus:outline-none"
        >
          <IoIosArrowDropleft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#00A551] text-white p-2 rounded-full focus:outline-none"
        >
          <IoIosArrowDropright className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
