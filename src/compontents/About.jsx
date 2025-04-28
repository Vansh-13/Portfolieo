import React, { useState } from 'react';
import pic from "../../public/im2.png"; // Import the image

function About() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      id="about"
      className="pt-24 min-h-screen bg-gradient-to-br from-blue-100 via-white to-teal-100 px-4 md:px-20"
    >
      <div className="max-w-screen-2xl mx-auto backdrop-blur-sm bg-white/30 p-6 rounded-xl shadow-2xl transition-transform duration-500 hover:scale-[1.01]">

        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 pb-3 border-b-4 border-green-600">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:justify-between gap-10">
          {/* Profile Image Section */}
          <div className="md:w-1/3 relative overflow-hidden rounded-lg shadow-xl hover:shadow-blue-300 transition-transform duration-500 transform hover:scale-105">
            <img
              src={pic}
              alt="Profile"
              className="w-64 h-64 object-cover rounded-lg mx-auto" // Smaller image size (w-64 and h-64)
            />
            <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
          </div>

          {/* About Me Text Section */}
          <div className="md:w-2/3 space-y-6 mt-6 md:mt-0 text-center md:text-left">
            <p className="text-2xl text-gray-800 leading-relaxed">
              Hi, I’m <span className="text-green-600 font-semibold">Vansh Madaan</span>, a passionate full-stack web developer and Computer Science student. I have hands-on experience with <span className="text-green-600 font-semibold">Java</span>, <span className="text-green-600 font-semibold">Data Structures & Algorithms</span>, and <span className="text-green-600 font-semibold">MERN Stack</span>.
            </p>

            {showMore && (
              <div className="text-lg text-gray-700 leading-relaxed space-y-4 animate-fadeIn">
                <p>
                  I love building creative and intuitive web applications, focusing on combining beautiful, user-centric design with powerful backend logic. I’m always looking for new opportunities to improve and learn new technologies.
                </p>
                <p>
                  Collaboration is my strength. I enjoy working with teams to bring innovative ideas to life. Let’s create something impactful together!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Button to toggle "Read More" */}
        <div className="text-center mt-8">
          <button
            onClick={handleToggle}
            className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300"
          >
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>

      <hr className="mt-16 border-gray-300" />
    </div>
  );
}

export default About;
