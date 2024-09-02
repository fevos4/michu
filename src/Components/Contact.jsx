import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhone, FaLinkedin, FaGithub, FaApple, FaGooglePlay } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#110D21] " id="contact">
      <div className="flex items-center justify-center">
        <div className="bg-[#1D213E] p-8 w-full md:w-8/12 lg:w-10/12 flex flex-col md:flex-row mt-10 space-y-6 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-1/2">
            <h1 className="text-white text-2xl font-boldi mb-4">MichuTech Logo</h1>
            <p className="text-gray-400 mb-4 font-boldi">
              michutechitsolutionsplc@gmail.com
            </p>
            <div className="flex flex-col space-y-3 mb-6">
              <div className="flex items-center text-gray-400 font-boldi">
                <IoIosMail className="text-[#0000FF] mr-4 h-5 w-5" />
                <p>(+251) 98-616-4444 / (+251) 98-626-4444</p>
              </div>
              <div className="flex items-center text-gray-400 font-boldi">
                <FaPhone className="text-[#0000FF] mr-4 h-5 w-5" />
                <p>LinkedIn</p>
              </div>
              <div className="flex items-center text-gray-400 font-boldi">
                <FaLinkedin className="text-[#0000FF] mr-4 h-5 w-5" />
                <p>LinkedIn</p>
              </div>
              <div className="flex items-center text-gray-400 font-boldi">
                <FaGithub className="text-[#0000FF] mr-4 h-5 w-5" />
                <p>GitHub</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="bg-[#110D21] text-white py-2 px-4 rounded-lg flex items-center font-boldi">
                <FaApple className="h-5 w-5 mr-2" /> App Store
              </button>
              <button className="bg-[#110D21] text-white py-2 px-4 rounded-lg flex items-center font-boldi">
                <FaGooglePlay className="h-5 w-5 mr-2" /> Google Play
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-[#110D21] p-6 md:p-10">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-1 font-boldi">Name:</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-lg bg-[#110D21] text-white border border-gray-700 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1 font-boldi">Email:</label>
                <input
                  type="email"
                  className="w-full p-2 rounded-lg bg-[#110D21] text-white border border-gray-700 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1 font-boldi">Message:</label>
                <textarea
                  rows="4"
                  className="w-full p-2 rounded-lg bg-[#110D21] text-white border border-gray-700 focus:outline-none"
                ></textarea>
              </div>
              <button className="w-full py-2 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-boldi">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="text-gray-400 text-center p-8 font-boldi">
        © 2024 MichuTech IT Solutions. All rights reserved.
      </div>
    </div>
  );
};

export default Contact;
