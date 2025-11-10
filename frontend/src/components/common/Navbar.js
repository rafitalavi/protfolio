import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import { API } from '../../api';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profile, setProfile] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${API}/profile/`);
        setProfile(res.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };
    fetchProfile();
  }, []);

  return (
    <nav className="p-3 md:p-4 shadow-lg bg-white sticky top-0 z-[60] backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link 
          to="/" 
          className="text-lg md:text-xl font-bold text-indigo-700 flex items-center group"
          onClick={closeMenu}
        >
          <div className="p-1 mr-2 group-hover:scale-110 transition-transform">
            {profile?.logo ? (
              <img 
                src={profile.logo} 
                alt="Logo" 
                className="w-8 h-8 md:w-10 md:h-10 object-contain" 
              />
            ) : (
              <FaCode className="text-indigo-700 text-xl" />
            )}
          </div>
          <span className="bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
            {profile?.name || "Portfolio"}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-5 lg:space-x-7">
          <Link 
            to="/projects" 
            className="text-gray-700 hover:text-indigo-700 font-medium transition-all duration-300"
          >
            Projects
          </Link>
          <Link 
            to="/publications" 
            className="text-gray-700 hover:text-indigo-700 font-medium transition-all duration-300"
          >
            Research
          </Link>
          <Link 
            to="/contact" 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1.5 rounded-full font-semibold hover:shadow-md transition-all duration-300 flex items-center group"
          >
            <FaEnvelope className="mr-2 group-hover:scale-110 transition-transform" />
            <span>Connect</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-700 hover:text-indigo-700 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute left-0 right-0 top-full bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out z-[70] ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pt-2 pb-4 px-4 space-y-3">
          <Link 
            to="/projects" 
            className="block py-2 px-4 text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg font-medium transition-all duration-300"
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link 
            to="/publications" 
            className="block py-2 px-4 text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg font-medium transition-all duration-300"
            onClick={closeMenu}
          >
            Research
          </Link>
          <Link 
            to="/contact" 
            className="block py-2 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-md transition-all duration-300 flex items-center justify-center group mt-2"
            onClick={closeMenu}
          >
            <FaEnvelope className="mr-2 group-hover:scale-110 transition-transform" />
            Connect
          </Link>
        </div>
      </div>

      {/* Backdrop — now only visible when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-40 z-[50] md:hidden"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
