import React from "react";

const About = () => {
    return (
        <div className="w-full flex flex-col justify-between px-6 md:p-24" id="about">
            <div className="grid md:grid-cols-2">
                <div className="order-2 md:order-1">
                    <img src="/assets/about.png" alt="Picture" className="h-60 md:ml-20" />
                </div>
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 order-1 md:order-2">
                    <p className="font-bold text-2xl">Why Us?</p>
                    <p className="py-3 md:mb-5 text-xs font-regi">
                        At <span className="text-[#00A551]">MichuTech IT Solutions PLC</span>, we serve as your bridge to a future enhanced by digital solutions and cutting-edge application development.
                    </p>
                    <p className="font-bold text-xl">Our Offerings:</p>
                    <ul className="list-disc pl-5">
                        <li className="text-xs font-regi">Mobile Application</li>
                        <li className="text-xs font-regi">Web Application</li>
                        <li className="text-xs font-regi">AI Expertise</li>
                        <li className="text-xs font-regi">Machine Learning</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;