import React from "react";

const testimonials = [
  {
    name: "Mr. Yonatan Wube",
    role: "CEO, Arki Sport Betting",
    image: "/assets/arki111.webp",
    testimonial:
      "MichuTech IT Solutions is a startup company founded by a team of dedicated and highly motivated young professionals. Their commitment to excellence is reflected in their diligent work ethic, consistently delivering projects on time and providing transparent progress updates as needed.",
    rating: 5,
  },
  {
    name: "Mr. Sisay Girma",
    role: "Project Manager, Wings Education and Media",
    image: "/assets/cus2.jpeg",
    testimonial:
      "MichuTech IT Solutions stands out for their driven, enthusiastic young professionals who deliver top-notch projects consistently on time and with transparent progress updates.",
    rating: 5,
  },
];

const Customer = () => {
  return (
    <div className="w-full">
      <p className="text-2xl md:text-3xl font-boldi mb-6 px-4 md:px-24 text-center md:text-left">
        What People Say About MichuTech?
      </p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
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
                <p className="text-gray-600 mb-4 text-center font-lighti text-xs md:text-sm">
                  {item.testimonial}
                </p>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-4"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="text-center">
                    <p className="text-black font-boldi text-sm md:text-base">{item.name}</p>
                    <p className="text-gray-500 font-regi text-xs md:text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex ">
            <img
              src="/assets/pointing.png"
              alt="Pointing"
              className="h-48 md:h-64 hidden md:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
