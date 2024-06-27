import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-4 lg:mb-0">
          <h3 className="text-xl font-semibold mb-2">About Us</h3>
          <p className="text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tortor scelerisque, sodales lorem vel, fermentum mauris.</p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="hover:text-gray-200 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-200 hover:text-white transition-colors"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-200 hover:text-white transition-colors"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-200 hover:text-white transition-colors"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
