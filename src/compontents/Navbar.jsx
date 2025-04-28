import React, { useState } from 'react';
import pic from '../../public/im2.png'; 
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = ["home", "about", "skills", "portfolio", "certificates", "contact"];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-cyan-700 to-indigo-800 shadow-xl transition-all duration-500">
      <div className="flex justify-between items-center h-16">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src={pic}
            className="h-12 w-12 rounded-full border-2 border-white shadow-lg hover:rotate-6 transition-transform duration-500"
            alt="Profile"
          />
          <div>
            <h1 className="text-xl font-bold text-white hover:scale-110 transform transition duration-300 cursor-pointer">
              Van<span className="text-yellow-300 text-2xl">sh</span>
            </h1>
            <p className="text-sm text-white opacity-80">Web Developer</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className="text-white hover:text-yellow-300 text-base font-medium transition duration-200 cursor-pointer hover:scale-105"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
          {menu ? <RxCross2 className="text-white text-3xl" /> : <TiThMenu className="text-white text-3xl" />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm flex flex-col items-center justify-center z-40 space-y-6 md:hidden transition duration-300 ease-in-out">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              onClick={() => setMenu(false)}
              className="text-2xl text-indigo-700 font-semibold hover:text-yellow-400 transition duration-200 cursor-pointer"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
