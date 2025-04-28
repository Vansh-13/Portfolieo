import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-gray-800 py-12">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center">
       
          <div className="flex space-x-8 mb-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 transform hover:scale-110"
            >
              <FaFacebook size={32} className="hover:text-yellow-400" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 transform hover:scale-110"
            >
              <FaTwitter size={32} className="hover:text-yellow-400" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 transform hover:scale-110"
            >
              <FaInstagram size={32} className="hover:text-yellow-400" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 transform hover:scale-110"
            >
              <FaLinkedinIn size={32} className="hover:text-yellow-400" />
            </a>
          </div>

       
          <hr className="border-gray-400 w-full mb-8" />

          
          <div className="text-center">
            <p className="text-sm mb-1">
              Copyright © 2024 Vansh Madaan. All rights reserved.
            </p>
            <p className="text-sm">
              Designed by Vansh Madaan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
