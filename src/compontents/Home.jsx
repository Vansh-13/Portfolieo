import React from "react";

import pic from "../../public/im2.jpg";
import cv from "../../public/cv.png";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";


import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div id="home" className="pt-20 max-w-screen-2xl container mx-auto px-4 md:px-20 my-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Right Column for Medium and Larger Devices */}
        <div className="flex justify-center mt-8 md:order-1">
          <img
            src={pic}
            className="rounded-full w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] shadow-lg border-4 border-blue-500 transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl"
            alt="Profile"
          />
        </div>

        {/* Left Column */}
        <div className="space-y-6 mt-12 md:order-2">
          <h2 className="text-3xl font-semibold text-gray-800">Welcome to My Feed</h2>
          <div className="flex items-center text-4xl animate-fadeIn">
            <h1 className="mr-2">Hello, I'm a</h1>
            <ReactTyped
              className="text-red-700 font-bold"
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>
          <p className="text-lg text-gray-700 transition duration-300 hover:underline">
            I focus on creating stylish and modern websites, online stores, and educational platforms tailored to meet the needs of schools and institutions. My goal is to deliver user-friendly and visually appealing solutions that enhance online experiences.
          </p>
          {/* Download CV Button */}
          <div className="flex justify-center mt-4">
            <a
              href={cv}
              download
              className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200 transform hover:scale-105"
            >
              Download CV
            </a>
          </div>
          {/* Social Media Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 mt-6">
            <div className="space-y-2">
              <h3 className="font-bold text-center">Available on</h3>
              <ul className="flex space-x-5 justify-center">
                {[
                  { href: "https://github.com/Vansh-13", icon: <FaGithubSquare className="text-2xl" /> },
                  { href: "https://www.linkedin.com/in/vansh-madaan-504a3424a/", icon: <FaLinkedin className="text-2xl" /> },
                  { href: "https://t.me/Vansh_13", icon: <FaTelegram className="text-2xl" /> },
                ].map(({ href, icon }) => (
                  <li key={href}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition duration-200">
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-center">Currently Working On</h3>
              <div className="flex space-x-5 justify-center">
                {[SiMongodb, SiExpress, FaReact, FaNodeJs].map((Icon, index) => (
                  <Icon key={index} className="text-3xl hover:scale-110 transition-transform duration-200 cursor-pointer" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Home;