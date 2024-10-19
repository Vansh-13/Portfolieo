


import React from "react";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

// Sample experience data for a student
const experiences = [
  {
    title: "Intern Software Developer",
    company: "Tech Solutions Inc.",
    duration: "Jun 2023 - Aug 2023",
    description: "Assisted in developing web applications and learned best coding practices.",
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "Jan 2023 - May 2023",
    description: "Created websites for local businesses, focusing on user experience and responsiveness.",
  },
  {
    title: "Project Lead - University Project",
    company: "University XYZ",
    duration: "Sep 2022 - Dec 2022",
    description: "Led a team to develop a mobile app for campus services.",
  },
  {
    title: "Volunteer Tutor",
    company: "Local Community Center",
    duration: "Jan 2022 - Present",
    description: "Tutored high school students in math and science subjects.",
  },
];

function Experience() {
  return (
    <section id="experience" className="max-w-screen-2xl mx-auto px-4 md:px-20 py-10 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">My Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <FaBriefcase className="text-blue-600 w-8 h-8 mr-2" />
              <h3 className="text-xl font-semibold">{exp.title}</h3>
            </div>
            <div className="flex items-center mb-2">
              <FaCalendarAlt className="text-gray-500 w-5 h-5 mr-2" />
              <p className="text-gray-600">{exp.duration}</p>
            </div>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
