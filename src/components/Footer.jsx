import React, { useEffect, useRef } from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { gsap } from 'gsap';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <footer ref={footerRef} className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div>
          <h3 className="text-xl font-semibold mb-2">About Us</h3>
          <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tortor scelerisque, sodales lorem vel, fermentum mauris.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-200 transition-colors">Contact Us</a>
          </div>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
