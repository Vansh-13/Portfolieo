import React, { useState } from 'react';

function About() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    // <div id='about' className="pt-20 max-w-screen-xl mx-auto px-6 md:px-20 py-16 bg-white shadow-lg rounded-lg my-16 relative overflow-hidden">
    //   <h2 className="text-5xl font-bold text-gray-800 mb-8 border-b-4 border-green-500 inline-block pb-2 text-center">About Me</h2>
      <div id='about' className="pt-20 max-w-screen-xl mx-auto px-6 md:px-20 py-16 bg-white shadow-lg rounded-lg my-16 relative overflow-hidden">
      <h2 className="text-5xl font-bold text-gray-800 mb-8 border-b-4 border-green-500 inline-block pb-2 text-center">About Me</h2>
     {/* <div id='about' className="max-w-screen-xl mx-auto px-6 md:px-20 py-16 bg-white shadow-lg rounded-lg my-16 relative overflow-hidden"> */}
      {/* <h2 className="text-5xl font-bold text-gray-800 mb-8 border-b-4 border-green-500 inline-block pb-2 text-center">About Me</h2> */}
      
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
            Hello! I’m <strong className="text-green-500">Vansh Madaan</strong>, a full-stack web developer and Computer Science student with skills in <strong className="text-green-500">Java</strong>, <strong className="text-green-500">Data Structures and Algorithms</strong>, and the <strong className="text-green-500">MERN stack</strong>. I thrive in dynamic environments, leveraging these skills to create impactful applications.
          </p>

          {showMore && (
            <div className="text-lg text-gray-700 leading-relaxed text-justify">
              <p className="mt-4">
                I am passionate about building user-friendly web applications and enjoy every step of the development process, from ideation to deployment. My goal is to continually improve my skills and stay updated with the latest technologies.
              </p>
              <p className="mt-4">
                I’m always eager to learn more and connect with like-minded individuals. Let’s collaborate and create something amazing together!
              </p>
            </div>
          )}
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="https://duws858oznvmq.cloudfront.net/Information_Technology_Specialist_Job_Description_fb64c8ee6f.webp" 
            alt="Profile"
            className="rounded-full w-[200px] md:w-[300px] h-[200px] md:h-[300px] shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Button to toggle additional text */}
      <div className="text-center mt-10">
        <button
          onClick={handleToggle}
          className="px-6 py-3 text-lg font-semibold rounded-full text-white bg-green-500 hover:bg-yellow-300 transition-all duration-300 shadow-lg"
        >
          {showMore ? 'Read Less' : 'Read More'}
        </button>
      </div>

      {/* Unique Design Element */}
      <div className="absolute inset-0 transform -translate-x-1/2 -translate-y-1/2">
        <svg viewBox="0 0 400 400" className="w-48 h-48 md:w-64 md:h-64 opacity-10">
          <circle cx="200" cy="200" r="150" fill="#E0F7FA" />
        </svg>
      </div>
    </div>
  );
}

export default About;