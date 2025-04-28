import React from "react";
import { FaEye } from "react-icons/fa"; 
import cert1 from "../../public/c1 (1).png"; 
import cert2 from "../../public/c1 (2).png"; 
import cert3 from "../../public/c1 (3).png"; 
import cert4 from "../../public/c1 (4).png"; 

const certificates = [
  {
    title: "IBM DevOps and Software Engineering Professional Certificate",
    image: cert1,
    link: "https://www.coursera.org/account/accomplishments/specialization/118IT95YN011",
  },
  {
    title: "HTML, CSS, and JavaScript for Web Developers",
    image: cert3,
    link: "https://www.coursera.org/account/accomplishments/verify/HD6UJQSNHC3R",
  },
  {
    title: "Server-side JavaScript with Node.js",
    image: cert2,
    link: "https://www.coursera.org/account/accomplishments/verify/RUC24C2XKD59",
  },
  {
    title: "Core and Advanced Java",
    image: cert4,
    link: "https://www.boardinfinity.com/micro-learning/core-and-advanced-java-certification-course",
  },
];

function Certificates() {
  return (
    <section
      id="certificates"
      className="max-w-screen-2xl container mx-auto px-4 md:px-16 py-16 my-16 min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100"
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-700 shadow-md hover:shadow-lg transition-shadow duration-300">
        My Certificates
      </h2>

      <p className="text-center text-base text-gray-600 mb-12">
        Certificates that showcase my skills and achievements!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-white rounded-xl shadow-md overflow-hidden group hover:scale-105 transition-all duration-500 transform hover:shadow-2xl"
            style={{
              animation: `fadeIn 0.7s ease forwards ${index * 0.15}s`,
            }}
          >
            {/* Certificate image */}
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-snug group-hover:text-green-600 transition-colors duration-300">
                {certificate.title}
              </h3>

              <div className="flex justify-center mt-auto">
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-md shadow-md text-sm transition duration-300 certificate-link"
                  style={{ position: 'relative', zIndex: 2 }} // Ensures it's clickable above other elements
                >
                  <FaEye className="mr-2" />
                  View Certificate
                </a>
              </div>
            </div>

            {/* Removed hover effect background, only keeping z-index and visibility */}
            <div className="absolute inset-0 bg-blue-100 opacity-0 rounded-xl transition-all duration-300"></div>
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

        /* Remove blue color for visited links */
        .certificate-link:visited {
          color: inherit;  /* Keeps the color as it was before click */
        }

        /* Remove hover blue effect for visited links */
        .certificate-link:visited:hover {
          background-color: #388E3C; /* Green color, no blue hover */
        }
      `}</style>
    </section>
  );
}

export default Certificates;
