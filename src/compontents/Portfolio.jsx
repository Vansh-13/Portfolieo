import React from "react";
import { FaEye, FaLink } from "react-icons/fa";
import la from "../../public/la.png"; 
import mp from "../../public/mp.png"; 
import po from "../../public/po.png"; 
import p22 from "../../public/p22.png"

const projects = [
  {
    title: "Laundry System Website",
    description: "Efficient and automated laundry management system for users to schedule pickups, track status, and manage payments online.",
    image: la,
    link: "https://github.com/Vansh-13/Laundry3",
    demo: "https://fantastic-wisp-d8059a.netlify.app/",
  },
  {
    title: "Real-Time Tracking App",
    description: "App for real-time location tracking of assets like shipments, vehicles, with live updates and detailed maps.",
    image: mp, 
    link: "https://github.com/Vansh-13/RealTimeTracking-app",
    demo: "https://realtimetracking-app2.onrender.com/",
  },
  {
    title: "Ecommerce-Cloth Store",
    description: "Online clothing store with secure payments, user-friendly interface, and personalized recommendations.",
    image: po, 
    link: "https://github.com/Vansh-13/ClothHaven",
    demo: "https://clothehavencom.netlify.app/",
  },
  {
    title: "Weather-Application",
    description: "Online clothing store with secure payments, user-friendly interface, and personalized recommendations.",
    image: p22, 
    link: "https://github.com/Vansh-13/Weather-Application",
    demo: "https://weather-cloudvista.netlify.app/",
  }
];

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 my-20 min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100"
    >
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-600 shadow-md hover:shadow-lg transition-shadow duration-300">
        My Projects
      </h2>

      <p className="text-center text-lg text-gray-600 mb-10">
        Explore my recent projects built with passion and precision!
      </p>

      {/* Portfolio grid layout - 2 projects per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-white rounded-xl shadow-lg overflow-hidden group"
            style={{
              animation: `fadeIn 0.6s ease forwards ${index * 0.1}s`,
            }}
          >
            {/* Image with hover zoom */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
              <div className="flex space-x-4 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 transform group-hover:scale-105"
                  style={{ position: 'relative', zIndex: 2 }}
                >
                  <FaLink className="mr-2" />
                  Source Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 transform group-hover:scale-105"
                  style={{ position: 'relative', zIndex: 2 }}
                >
                  <FaEye className="mr-2" />
                  View Demo
                </a>
              </div>
            </div>

            {/* Hover effect background */}
            <div className="absolute inset-0 bg-blue-100 opacity-0 rounded-xl transition-all duration-300 group-hover:opacity-30"></div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Portfolio;
