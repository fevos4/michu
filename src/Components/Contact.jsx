import React from "react";
import { useNavigate } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";
import { FaPhone, FaLinkedin, FaGithub, FaApple, FaGooglePlay } from "react-icons/fa";

const Contact = () => {
  const navigate = useNavigate();

  const handleAllClick = () => {
    navigate('/');
    window.scrollTo(0, 0); 
  };

  const handlePrivacyClick = () => {
    navigate('/privacy'); 
    window.scrollTo(0, 0); 

  };

  const handleConductClick = () => {
    navigate('/conduct'); 
    window.scrollTo(0, 0); 

  };

  return (
    <div className="bg-[#110D21]" id="contact">
      <div className="flex items-center justify-center">
        <div className="bg-[#1D213E] p-8 w-full md:w-8/12 lg:w-10/12 flex flex-col md:flex-row mt-10 space-y-6 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-1/2">
            <div onClick={handleAllClick} className="cursor-pointer">
              <img src="/assets/logo.png" alt="logo" className='w-32' />
            </div>
            
           
            <div className="flex flex-col space-y-3 mb-6">
              <div className="flex items-center text-white font-boldi">
                <IoIosMail className="text-[#0000FF] mr-4 h-5 w-5" />
                <a href="#"  className="hover:text-[#00A551]">michutechitsolutionsplc@gmail.com</a>
              </div>
              <div className="flex items-center text-white font-boldi">
                <FaPhone className="text-[#0000FF] mr-4 h-5 w-5" />
                <p  className="hover:text-[#00A551]">(+251) 98-616-4444 / (+251) 98-626-4444</p>
              </div>
              <div className="flex items-center text-white font-boldi">
                <FaLinkedin className="text-[#0000FF] mr-4 h-5 w-5" />
                <a
            href="https://www.linkedin.com/company/michutech-it-solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00A551]"
          >LinkedIn</a>
                
              </div>
              <div className="flex items-center text-white font-bold">
                <FaGithub className="text-[#0000FF] mr-4 h-5 w-5" />
                <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00A551]"
          >Github</a>
              </div>
            </div>
            <div className="flex space-x-4 mb-4">
              <button className="bg-[#110D21] text-white py-2 px-4 rounded-lg flex items-center font-bold hover:text-[#00A551]">
                <FaApple className="h-5 w-5 mr-2 " /> App Store
              </button>
              <button className="bg-[#110D21] text-white py-2 px-4 rounded-lg flex items-center font-bold hover:text-[#00A551]">
                <FaGooglePlay className="h-5 w-5 mr-2" /> Google Play
              </button>
            </div>
            <p className="text-white mt-4 font-boldi hover:text-[#00A551]" onClick={handlePrivacyClick} style={{ cursor: 'pointer' }}>
              Privacy Policy
            </p>
            <p className="text-white mt-4 font-boldi hover:text-[#00A551]" onClick={handleConductClick} style={{ cursor: 'pointer' }}>
              Code of Conduct
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-[#110D21] p-6 md:p-10">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-1 font-bold">Name:</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-lg bg-[#110D21] text-white border border-gray-700 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1 font-bold">Email:</label>
                <input
                  type="email"
                  className="w-full p-2 rounded-lg bg-[#110D21] text-white border border-gray-700 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1 font-bold">Message:</label>
                <textarea
                  rows="4"
                  className="w-full p-2 rounded-lg bg-[#110D21] text-white border border-gray-700 focus:outline-none"
                ></textarea>
              </div>
              <button className="w-full py-2 px-4 rounded-lg bg-blue-600 text-white hover:bg-[#00A551] font-bold">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="text-gray-400 text-center p-8 font-bold">
        © 2024 MichuTech IT Solutions. All rights reserved.
      </div>
    </div>
  );
};

export default Contact;
