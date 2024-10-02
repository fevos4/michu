import React, { useRef } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const testimonials = [
  {
    name: "Mr. Yonatan Wube",
    role: "CEO, Arki Sport Betting",
    image: "/assets/male.webp",
    testimonial:
      "MichuTech IT Solutions is a startup company founded by a team of dedicated and highly motivated young professionals. Their commitment to excellence is reflected in their diligent work ethic, consistently delivering projects on time and providing transparent progress updates as needed.",
    rating: 5,
  },
  {
    name: "Mr. Sisay Girma",
    role: "Project Manager, Wings Education and Media",
    image: "/assets/male.webp",
    testimonial:
      "MichuTech IT Solutions stands out for their driven, enthusiastic young professionals who deliver top-notch projects consistently on time and with transparent progress updates.",
    rating: 5,
  },
];

const Customer = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full">
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-boldi mb-6 px-4 md:px-24 md:text-left">
          What People Say About MichuTech?
        </p>
      </div>

      <div
        className="w-full flex flex-col justify-between px-4 py-8 md:p-24 mb-6"
        style={{
          backgroundImage: `url('/assets/herro.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-40">
          {/* Mobile Layout with Arrows */}
          <div className="relative md:hidden">
            {/* Left Arrow */}
            <button
              className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 p-2 bg-[#00A551] text-white rounded-full"
              onClick={scrollLeft}
            >
              <IoIosArrowDropleft className="w-6 h-6 " />
            </button>

            {/* Cards Container (Mobile) */}
            <div
              className="flex gap-6 overflow-x-auto scrollbar-hide"
              ref={scrollRef}
              style={{ scrollBehavior: "smooth" }}
            >
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="bg-white min-w-[250px] md:min-w-[300px] p-6 md:p-8 shadow-2xl flex flex-col items-center "
                >
                  <div className="flex items-center mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 md:w-5 md:h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.074 3.3a1 1 0 00.95.691h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.074 3.3c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.837-.197-1.538-1.118l1.074-3.3a1 1 0 00-.364-1.118L2.978 8.727c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.691l1.074-3.3z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 text-center text-xs md:text-sm font-regi">
                    {item.testimonial}
                  </p>
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-4"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="text-center">
                      <p className="text-black font-boldi text-sm md:text-base">
                        {item.name}
                      </p>
                      <p className="text-gray-500 text-xs md:text-sm font-regi">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 p-2 bg-[#00A551] text-white rounded-full"
              onClick={scrollRight}
            >
              <IoIosArrowDropright className="w-6 h-6 " />
            </button>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 shadow-2xl flex flex-col items-center"
              >
                <div className="flex items-center mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.074 3.3a1 1 0 00.95.691h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.074 3.3c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.837-.197-1.538-1.118l1.074-3.3a1 1 0 00-.364-1.118L2.978 8.727c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.691l1.074-3.3z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-center  md:text-sm font-regi">
                  {item.testimonial}
                </p>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-4"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="text-center">
                    <p className="text-black font-bold text-sm md:text-base font-boldi">
                      {item.name}
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm font-regi">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Static Image on larger screens */}
          <div className="hidden md:flex">
            <img
              src="/assets/pointing.png"
              alt="Pointing"
              className="h-48 md:h-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;