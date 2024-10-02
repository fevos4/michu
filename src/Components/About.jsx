import React from "react";

const About = () => {
    return (
        <div className="w-full flex flex-col items-center px-6 md:p-24" id="about">
            <div className="grid md:grid-cols-2 gap-4 md:gap-16 max-w-5xl w-full">
                <div className="order-2 md:order-1 justify-center hidden md:flex">
                    <img src="/assets/about.png" alt="Picture" className="h-60 md:h-80 object-contain" />
                </div>
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 order-1 md:order-2">
                    <p className="font-bold text-2xl text-center md:text-left">Why Us?</p>
                    <p className="py-3 md:mb-5 font-regi text-center md:text-left">
                        At <span className="text-[#00A551]">MichuTech IT Solutions PLC</span>, we serve as your bridge to a future enhanced by digital solutions and cutting-edge application development.
                    </p>
                    <p className="font-bold text-2xl text-center md:text-left">Our Offerings:</p>
                    <ul className="list-disc pl-5 text-center md:text-left">
                        <li className="font-regi">Mobile Application</li>
                        <li className="font-regi">Web Application</li>
                        <li className="font-regi">AI Expertise</li>
                        <li className="font-regi">Machine Learning</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;