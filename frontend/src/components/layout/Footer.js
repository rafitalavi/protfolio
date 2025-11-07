import React, { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";
import axios from "axios";
import { API } from '../../api';

const Footer = () => {
  const [data, setData] = useState({ profile: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileRes = await axios.get(`${API}/profile/`);
        setData({ profile: profileRes.data });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const { profile } = data;

  if (!data.profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 font-semibold">
            Loading Professional Profile...
          </p>
        </div>
      </div>
    );
  }

  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <div className="flex justify-center items-center mb-6">
          <div className="p-2 rounded-lg mr-3">
            {profile.logo ? (
             <img 
    src={profile.logo} 
    alt="Logo" 
    className="w-10 h-10 object-contain" 
  />
            ) : (
              <FaCode className="text-white text-2xl" />
            )}  
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
         {profile.name}
          </span>
        </div>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
         {profile.tagline || "Full-Stack Developer | Tech Enthusiast | Lifelong Learner"}
        </p>
        <div className="flex justify-center gap-6 mb-6">
          <a
            href={profile.linkedin_url}
              target="_blank"   
            className="text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.github_url}
              target="_blank"   
            className="text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.researchgate_url}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Research Gate
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()}  {profile.name}. 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
