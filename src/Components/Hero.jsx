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
      className="w-full h-screen flex flex-col justify-between pt-20 px-4 md:px-24"
      style={{ 
        backgroundImage: `url('/assets/herro.png')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat' 
      }}
      id="home"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Section: Text */}
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-3xl md:text-5xl font-bold text-center md:text-left'>
            Transforming Ideas into <span className="text-[#00A551]">Digital Solutions</span>
          </p>
          <p className='py-3 md:mb-5 text-sm md:text-base font-light text-center md:text-left'>
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

        {/* Right Section: Image */}
        <div className="flex justify-center md:justify-end">
          <img 
            src="/assets/hero.png" 
            alt="Hero Visual" 
            className='md:h-96 h-72 md:ml-20 object-contain'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
