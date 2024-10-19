import React from 'react';
import { FaGithubSquare, FaFacebookF, FaLinkedin, FaTelegram, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

function Contact() {
  return (
    <section id='contact' className="max-w-screen-xl mx-auto px-4 md:px-8 py-16 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact Us</h2>
        <p className="mt-2 text-gray-600">
          Have any questions or feedback? We'd love to hear from you.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
        {/* Contact Info Section */}
        <div className="w-full md:w-1/2 p-4">
          <div className="contact-info bg-white border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Let's Get in Touch</h3>
            <p className="text-gray-600 mb-4">We’re available via these channels.</p>

            <div className="space-y-4 mb-4">
              <div className="information flex items-center">
                <FaMapMarkerAlt className="icon w-5 h-5 mr-3 text-black transition-transform duration-300 hover:scale-110" />
                <p className="text-gray-700">62 - Dharmawala, Uttarakhand 248142, India</p>
              </div>
              <div className="information flex items-center">
                <MdEmail className="icon w-5 h-5 mr-3 text-black transition-transform duration-300 hover:scale-110" />
                <p className="text-gray-700">madaanvansh68@gmail.com</p>
              </div>
              <div className="information flex items-center">
                <FaPhoneAlt className="icon w-5 h-5 mr-3 text-black transition-transform duration-300 hover:scale-110" />
                <p className="text-gray-700">+91 7037191676</p>
              </div>
            </div>

            <div className="social-media">
              <p className="text-gray-600 mb-2">Follow us on:</p>
              <div className="flex space-x-4">
                <a href="#" aria-label="GitHub">
                  <FaGithubSquare className="text-black hover:text-gray-800 transition duration-300 transform hover:scale-110" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedin className="text-black hover:text-gray-800 transition duration-300 transform hover:scale-110" />
                </a>
                <a href="#" aria-label="YouTube">
                  <IoLogoYoutube className="text-black hover:text-gray-800 transition duration-300 transform hover:scale-110" />
                </a>
                <a href="#" aria-label="Telegram">
                  <FaTelegram className="text-black hover:text-gray-800 transition duration-300 transform hover:scale-110" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 p-4">
          <div className="contact-form bg-white border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
            <form action="index.html" autoComplete="off" className="space-y-4">
              <div className="relative">
                <input type="text" name="name" className="border-b-2 w-full p-3 text-gray-900 bg-transparent outline-none transition duration-300 focus:border-black" required />
                <label className="absolute top-0 left-0 transform -translate-y-3 text-gray-500 transition-all duration-300">Username</label>
              </div>
              <div className="relative">
                <input type="email" name="email" className="border-b-2 w-full p-3 text-gray-900 bg-transparent outline-none transition duration-300 focus:border-black" required />
                <label className="absolute top-0 left-0 transform -translate-y-3 text-gray-500 transition-all duration-300">Email</label>
              </div>
              <div className="relative">
                <input type="tel" name="phone" className="border-b-2 w-full p-3 text-gray-900 bg-transparent outline-none transition duration-300 focus:border-black" required />
                <label className="absolute top-0 left-0 transform -translate-y-3 text-gray-500 transition-all duration-300">Phone</label>
              </div>
              <div className="relative">
                <textarea name="message" className="border-b-2 w-full p-3 text-gray-900 bg-transparent outline-none transition duration-300 focus:border-black h-24" required></textarea>
                <label className="absolute top-0 left-0 transform -translate-y-3 text-gray-500 transition-all duration-300">Message</label>
              </div>
              <input type="submit" value="Send" className="bg-black text-white w-full py-2 rounded-lg hover:bg-gray-800 transition duration-300 cursor-pointer" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
