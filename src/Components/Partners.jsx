import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const cards = [
  {
    image: "/assets/arki.png",
    name: "Arki",
  },
  {
    image: "/assets/wings.png",
    name: "Wings Education and Media",
  },
  {
    image: "/assets/wash.png",
    name: "Washlink",
  },
  {
    image: "/assets/veh.png",
    name: "YER Tech",
  },
  {
    image: "/assets/endode.png",
    name: "YER Tech",
  },
];

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div id="partners" className="w-full">
      <p className="text-center text-3xl font-boldi mb-20 md:px-24">
        Our Partners
      </p>

      {/* Grid for Desktop */}
      <div className="hidden md:flex justify-between space-x-6 px-20 mb-10">
        {cards.map((card, index) => (
          <div key={index} className="text-center mb-20 font-medi">
            <img
              src={card.image}
              alt={card.name}
              className="mx-auto mb-2 h-16 w-20 rounded-lg"
            />
            <p>{card.name}</p>
          </div>
        ))}
      </div>

      {/* Swipeable Section for Mobile */}
      <div {...handlers} className="md:hidden relative mx-auto max-w-full overflow-hidden px-4">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={`min-w-full p-4 transition-transform duration-500 transform-gpu`}
            >
              <div className="text-center mb-20 font-medi">
                <img
                  src={card.image}
                  alt={card.name}
                  className="mx-auto mb-2 h-16 w-20 rounded-lg"
                />
                <p>{card.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows for Swiping */}
        <button
          onClick={handlePrev}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-[#00A551] text-white p-2 rounded-full focus:outline-none"
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-[#00A551] text-white p-2 rounded-full focus:outline-none"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Partners;
