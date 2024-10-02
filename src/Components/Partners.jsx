import React from "react";

const cards = [
  {
    image: "/assets/arkki.png",
    name: "Arki",
  },
  {
    image: "/assets/wingg.png",
    name: "Wings Education and Media",
  },
  {
    image: "/assets/washh.png",
    name: "Washlink",
  },
  {
    image: "/assets/yerr.png",
    name: "YER Tech",
  },
  {
    image: "/assets/endo.png",
    name: "Endode",
  },
];

const Partners = () => {
  return (
    <div id="partners" className="w-full overflow-hidden py-10">
      <p className="text-center text-3xl font-bold mb-10">Our Partners</p>

      {/* Marquee Movement for Both Desktop and Mobile */}
      <div className="marquee-container bg-slate-200  h-32 flex items-center">
        <div className="marquee-content">
          {cards.map((card, index) => (
            <div key={index} className="partner-item text-center mx-6">
              <img
                src={card.image}
                alt={card.name}
                className="mx-auto mb-2 h-36 w-32 rounded-lg "
              />
             
            </div>
          ))}
          {/* Repeat the list to create infinite scrolling effect */}
          {cards.map((card, index) => (
            <div key={index + cards.length} className="partner-item text-center mx-6">
              <img
                src={card.image}
                alt={card.name}
                className="mx-auto mb-2 h-36 w-32 rounded-lg"
              />
              
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for marquee animation */}
      <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
        }

        .marquee-content {
          display: flex;
          animation: marquee 15s linear infinite;
        }

        .partner-item {
          flex-shrink: 0;
          width: 200px;
        }

        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Partners;
