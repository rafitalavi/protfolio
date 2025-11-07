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
    <nav className="p-4 md:p-6 shadow-2xl bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-xl md:text-2xl font-bold text-indigo-700 flex items-center group"
          onClick={closeMenu}
        >
          <div className="p-2  mr-3 group-hover:scale-110 transition-transform">
            {profile?.logo ? (
              <img src={profile.logo} alt="Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            ) : (
              <FaCode className="text-white text-sm md:text-lg" />
            )}
          </div>
          <span className="bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
            {profile?.name || "Portfolio"}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link 
            to="/projects" 
            className="text-gray-700 hover:text-indigo-700 font-medium transition-all duration-300 hover:font-semibold"
          >
            Projects
          </Link>
          <Link 
            to="/publications" 
            className="text-gray-700 hover:text-indigo-700 font-medium transition-all duration-300 hover:font-semibold"
          >
            Research
          </Link>
          <Link 
            to="/contact" 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 lg:px-6 py-2 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center group"
          >
            <FaEnvelope className="mr-2 group-hover:scale-110 transition-transform" />
            <span className="hidden lg:inline">Connect</span>
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
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="pt-4 pb-6 px-4 bg-white border-t border-gray-200 space-y-4">
          <Link 
            to="/projects" 
            className="block py-3 px-4 text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 rounded-xl font-medium transition-all duration-300"
            onClick={closeMenu}
          >
            Case Studies
          </Link>
          <Link 
            to="/publications" 
            className="block py-3 px-4 text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 rounded-xl font-medium transition-all duration-300"
            onClick={closeMenu}
          >
            Research
          </Link>
          <Link 
            to="/contact" 
            className="block py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group mt-4"
            onClick={closeMenu}
          >
            <FaEnvelope className="mr-2 group-hover:scale-110 transition-transform" />
            Connect
          </Link>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
