import React from "react";
import { FaEye, FaLink } from "react-icons/fa";
import la from "../../public/la.png"; 
import mp from "../../public/mp.png"; 

const projects = [
  {
    title: "Laundry System Website",
    description: "This is a brief description of Project One.",
    image: la,
    link: "https://github.com/Vansh-13/Laundry3",
    demo: "https://fantastic-wisp-d8059a.netlify.app/",
  },
  {
    title: "Real-Time Tracking App",
    description: "This is a brief description of Project Two.",
    image: mp, 
    link: "https://github.com/Vansh-13/RealTimeTracking-app",
    demo: "https://realtimetracking-app2.onrender.com/",
  },
  {
    title: "Project Three",
    description: "This is a brief description of Project Three.",
    image: "path/to/project3-image.jpg", 
    link: "https://link-to-project-three.com",
    demo: "https://demo-link-to-project-three.com",
  },
  {
    title: "Project Four",
    description: "This is a brief description of Project Four.",
    image: "path/to/project4-image.jpg", 
    link: "https://link-to-project-four.com",
    demo: "https://demo-link-to-project-four.com",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="max-w-screen-2xl mx-auto px-4 md:px-8 py-16 bg-gradient-to-r from-gray-100 to-white">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center space-x-2 transition duration-200 hover:bg-blue-700 shadow-md"
                >
                  <FaLink />
                  <span className="text-sm">Source Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white py-2 px-4 rounded-lg flex items-center space-x-2 transition duration-200 hover:bg-green-700 shadow-md"
                >
                  <FaEye />
                  <span className="text-sm">View Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
