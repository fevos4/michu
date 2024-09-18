import React, { useState } from "react";

const Hero = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setClick(false);
  };

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center px-4 md:px-24" 
      style={{ 
        backgroundImage: `url('/assets/herro.png')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      id="home"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center w-full max-w-6xl">
        {/* Left section with text */}
        <div className="flex flex-col justify-center md:items-start text-center md:text-left w-full">
          <p className="text-3xl md:text-5xl font-bold">
            Transforming Ideas into <span className="text-[#00A551]">Digital Solutions</span>
          </p>
          <p className="py-3 md:mb-5 text-sm md:text-base font-light">
            We are a technology company dedicated to creating innovative solutions that empower businesses.
          </p>
          <div className="flex justify-center md:justify-start">
            <button 
              onClick={() => scrollToSection("services")}  
              className="hover:bg-slate-400 rounded-md bg-[#0000FE] px-4 py-2 text-white font-bold"
            >
              Explore More
            </button>
          </div>
        </div>

        {/* Right section with image */}
        <div className="flex justify-center md:justify-end">
          <img 
            src="/assets/hero.png" 
            alt="Hero Illustration" 
            className="h-72 md:h-96 object-contain md:ml-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
