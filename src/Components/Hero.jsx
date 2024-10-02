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
      className="w-full flex items-center justify-center pt-16 px-4 md:px-24"
      style={{ 
        backgroundImage: `url('/assets/herro.png')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight:'600px', 
      }}
      id="home"
    >
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Left Section: Text */}
        <div className='flex flex-col justify-center items-center md:items-start w-full px-2 py-6 sm:py-8'>
          <p className='text-2xl sm:text-4xl md:text-5xl font-boldi text-center md:text-left'>
            Transforming Ideas into <span className="text-[#00A551]">Digital Solutions</span>
          </p>
          <p className='py-2 sm:py-3 text-xs sm:text-sm md:text-base font-lighti text-center md:text-left'>
            We are a technology company dedicated to creating innovative solutions that empower businesses.
          </p>
          <div className="flex justify-center md:justify-start mt-4">
            <button 
              onClick={() => scrollToSection("services")}  
              className="hover:bg-[#00A551] rounded-md bg-[#0000FE] px-6 sm:px-8 py-2 text-white font-boldi"
            >
              Explore More
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center md:justify-end">
          <img 
            src="/assets/hero.png" 
            alt="Hero Visual" 
            className='h-56 sm:h-72 md:h-96 object-contain'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
