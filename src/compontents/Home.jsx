import React from "react";
import pic from "../../public/im2.png";
import cv from "../../public/cvvv.png";

import { FaGithubSquare, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { SiMongodb, SiExpress } from "react-icons/si";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div
      id="home"
      className="min-h-screen pt-32 px-4 md:px-20 bg-gradient-to-br from-blue-100 via-white to-teal-100"
    >
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center backdrop-blur-lg bg-white/50 p-10 rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
        
        {/* Profile Picture */}
        <div className="flex justify-center md:justify-end mt-8 md:order-1">
          <img
            src={pic}
            className="rounded-full w-[230px] h-[230px] md:w-[280px] md:h-[280px] shadow-2xl border-[5px] border-blue-400 hover:shadow-blue-300 transition-transform duration-500 transform hover:scale-105"
            alt="Profile"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left mt-6 md:mt-0 md:order-2">
          <h2 className="text-4xl font-bold text-gray-800">Welcome to My Feed</h2>
          <div className="flex items-center justify-center md:justify-start text-3xl md:text-4xl animate-fadeIn">
            <span className="mr-2">Hello, I'm a</span>
            <ReactTyped
              className="text-blue-700 font-bold ml-2"
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>

          <p className="text-lg text-gray-700 transition duration-300 hover:underline">
            I specialize in developing responsive and performance-optimized web applications
            with a focus on clean architecture and scalable code.
            My aim is to deliver impactful digital solutions for institutions and businesses.
          </p>

          {/* Download CV Button */}
          <div className="flex justify-center md:justify-start">
            <a
              href={cv}
              download
              className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Social + Stack */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-6 space-y-6 md:space-y-0">

            {/* Social Icons */}
            <div className="space-y-2 text-center">
              <h3 className="font-semibold">Available on</h3>
              <ul className="flex justify-center space-x-5 text-2xl text-gray-700">
                <li><a href="https://github.com/Vansh-13" target="_blank" rel="noreferrer" className="hover:text-black"><FaGithubSquare /></a></li>
                <li><a href="https://www.linkedin.com/in/vansh-madaan-504a3424a/" target="_blank" rel="noreferrer" className="hover:text-blue-600"><FaLinkedin /></a></li>
                <li><a href="https://t.me/Vansh_13" target="_blank" rel="noreferrer" className="hover:text-cyan-600"><FaTelegram /></a></li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2 text-center">
              <h3 className="font-semibold">Currently Working On</h3>
              <div className="flex justify-center space-x-6 text-3xl text-gray-800">
                <SiMongodb className="hover:text-green-600 hover:scale-110 transition-transform" />
                <SiExpress className="hover:text-black hover:scale-110 transition-transform" />
                <FaReact className="hover:text-cyan-400 hover:scale-110 transition-transform" />
                <FaNodeJs className="hover:text-green-700 hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-16 border-gray-300" />
    </div>
  );
}

export default Home;
