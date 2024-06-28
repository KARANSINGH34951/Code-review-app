import React from "react";
import { useSelector } from 'react-redux';
import { selector } from '../feature/userSlice';

const NavBar = () => {
  const user = useSelector(selector);
  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-white">CodeOptimize</a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#services" className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#features" className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Features</a>
                <a href="#testimonials" className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="ml-4 flex items-center md:ml-6">
             {user.userloggedIn &&  <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors">Login</button>}
              {user.userloggedIn ? 
                <button className="ml-4 px-4 py-2 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition-colors">Sign Up</button>: 
                <button className="ml-4 px-4 py-2 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors">Logout</button>}
            </div>
          </div>
        </div>
      </div>

      <div className="profile">
      <h2>User Profile</h2>
      {user.loggedIn ? (
        <div>
          <p>Email: {user.email}</p>
          <p>username:{user.username}</p>
          {/* Add more user info if needed */}
        </div>
      ) : (
        <p>User is not logged in.</p>
      )}
    </div>
    </nav>
  );
};

export default NavBar;
