import React, { useState } from 'react';
import pic from '../../public/im2.jpg'; 
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll'; // Use react-scroll for smooth scrolling

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <div className='max-w-screen-2xl container mx-auto px-4 h-16 md:px-20 shadow-md fixed top-0 left-0 bg-gradient-to-r from-teal-600 to-blue-700 z-50'>
      <div className='flex justify-between items-center h-16'>
        <div className='flex items-center space-x-2'>
          <img src={pic} className='h-12 w-12 rounded-full border-2 border-white shadow-lg' alt="Profile" />
          <div>
            <h1 className='font-semibold text-xl text-white cursor-pointer transition-transform duration-200 hover:scale-105'>
              Vans<span className='text-yellow-300 text-2xl'>h</span>
            </h1>
            <p className='text-sm text-white opacity-80'>Web Developer</p>
          </div>
        </div>

        <div className='hidden md:flex items-center space-x-8'>
          <Link to="home" smooth={true} duration={500} className='text-white hover:text-yellow-300 transition duration-200 cursor-pointer'>Home</Link>
          <Link to="about" smooth={true} duration={500} className='text-white hover:text-yellow-300 transition duration-200 cursor-pointer'>About</Link>
          <Link to="skills" smooth={true} duration={500} className='text-white hover:text-yellow-300 transition duration-200 cursor-pointer'>Skills</Link>
          <Link to="portfolio" smooth={true} duration={500} className='text-white hover:text-yellow-300 transition duration-200 cursor-pointer'>Portfolio</Link>
          <Link to="contact" smooth={true} duration={500} className='text-white hover:text-yellow-300 transition duration-200 cursor-pointer'>Contact</Link>
        </div>

        <div onClick={() => setMenu(!menu)} className='md:hidden cursor-pointer'>
          {menu ? <RxCross2 className='text-2xl text-white' /> : <TiThMenu className='text-2xl text-white' />}
        </div>
      </div>

      {menu && (
        <div className='md:hidden flex flex-col h-screen items-center justify-center space-y-4 bg-white bg-opacity-90 shadow-lg'>
          <Link to="home" smooth={true} duration={500} className='text-lg font-semibold text-green-500 hover:text-yellow-300 transition duration-200 cursor-pointer'>Home</Link>
          <Link to="about" smooth={true} duration={500} className='text-lg font-semibold text-green-500 hover:text-yellow-300 transition duration-200 cursor-pointer'>About</Link>
          <Link to="skills" smooth={true} duration={500} className='text-lg font-semibold text-green-500 hover:text-yellow-300 transition duration-200 cursor-pointer'>Skills</Link>
          <Link to="portfolio" smooth={true} duration={500} className='text-lg font-semibold text-green-500 hover:text-yellow-300 transition duration-200 cursor-pointer'>Portfolio</Link>
          <Link to="contact" smooth={true} duration={500} className='text-lg font-semibold text-green-500 hover:text-yellow-300 transition duration-200 cursor-pointer'>Contact</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;