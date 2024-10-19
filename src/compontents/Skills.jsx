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
    <div id='skills' className='max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 bg-white shadow-lg rounded-lg my-10'>
      <h1 className='text-4xl font-bold text-center mb-8 text-black shadow-md hover:shadow-lg transition-shadow duration-300'>
        My Tech Toolkit
      </h1>

      <p className='text-center text-lg text-gray-600 mb-10'>
        Discover the tools I wield to build amazing digital experiences!
      </p>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
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
            className='flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:bg-gray-100 rounded-lg p-4 shadow-lg'
            key={skill.label}
            style={{ animation: `fadeIn 0.6s ease forwards ${index * 0.1}s` }}
          >
            <img 
              src={skill.src} 
              alt={skill.label} 
              className='w-24 h-24 rounded-full shadow-md mb-2 transition-transform duration-300 hover:rotate-12' 
            />
            <h3 className='text-lg font-semibold text-gray-800'>{skill.label}</h3>
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
    </div>
  );
}

export default Skills;