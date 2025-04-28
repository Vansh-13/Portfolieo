import React from 'react';
import html from "../../public/html.png";
import js from "../../public/javascript.png";
import java from "../../public/java.png";
import node from "../../public/node.png";
import react from "../../public/reactjs.png";
import express from "../../public/express.png";
import appwrite from "../../public/pp.png";
import mongodb from "../../public/mongodb.jpg";
import css from "../../public/css.jpg";

function Skills() {
  return (
    <div
      id="skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 my-20 min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50"
    >
      <h1 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-bounce">
        My Tech Toolkit
      </h1>

      <p className="text-center text-lg text-gray-700 mb-12">
        <span className="inline-block animate-pulse">
          Discover the tools I wield to build amazing digital experiences!
        </span>
      </p>

      {/* Skills grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
        {[
          { src: html, label: 'HTML' },
          { src: js, label: 'JavaScript' },
          { src: react, label: 'React' },
          { src: express, label: 'Express' },
          { src: node, label: 'Node.js' },
          { src: mongodb, label: 'MongoDB' },
          { src: java, label: 'Java' },
          { src: appwrite, label: 'Appwrite' },
          { src: css, label: 'CSS' },
        ].map((skill, index) => (
          <div
            key={skill.label}
            className="relative flex flex-col items-center justify-center p-8 bg-white rounded-3xl shadow-2xl overflow-hidden group transform transition duration-500 hover:scale-110 hover:rotate-1 hover:shadow-green-400/50"
            style={{
              animation: `fadeInUp 0.8s ease forwards ${index * 0.15}s`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-green-200 via-white to-blue-200 opacity-0 group-hover:opacity-80 transition duration-500 rounded-3xl"></div>
            
            <img
              src={skill.src}
              alt={skill.label}
              className="w-24 h-24 rounded-full shadow-md z-10 transition-transform duration-500 group-hover:scale-125"
            />
            <h3 className="mt-6 text-xl font-bold text-gray-800 z-10 group-hover:text-green-600 transition-all duration-300">
              {skill.label}
            </h3>
          </div>
        ))}
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Skills;
