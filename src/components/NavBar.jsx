import { useSelector } from 'react-redux';
import { selector } from '../feature/userSlice';
import { useDispatch } from 'react-redux';
import { logout } from '../feature/userSlice';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiUserCircle } from 'react-icons/hi';

const NavBar = () => {
  const user = useSelector(selector);
  const dispatch = useDispatch();
  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = () => {
    // console.log(user.username);
    dispatch(logout());
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-white">
                CodeOptimize
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="#services"
                  className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </Link>
                <Link
                  to="#features"
                  className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Features
                </Link>
                <Link
                  to="#connect"
                  className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="ml-4 flex items-center md:ml-6">
              {!user.loggedIn ? (
                <>
                  <Link to="/login">
                    <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors">
                      Login
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="ml-4 px-4 py-2 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition-colors">
                      Sign Up
                    </button>
                  </Link>
                </>
              ) : (
                <div className="relative">
                  <button
                    onClick={toggleProfile}
                    className="flex items-center px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
                  >
                    <HiUserCircle className="w-6 h-6 mr-2" />
                    <span className="hidden md:inline-block">{user.username}</span>
                  </button>
                  {showProfile && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                      <div className="px-4 py-2">
                        <div className="flex items-center">
                          <HiUserCircle className="w-10 h-10 mr-2 text-gray-500" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{user.username}</p>
                            <p className="text-xs text-gray-500">{user.email}</p>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200">
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
