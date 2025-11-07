import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {FaPhoneAlt , FaLinkedin, FaGithub, FaBriefcase, FaEnvelope, FaMapMarkerAlt, FaDownload, FaFacebook } from 'react-icons/fa';

const Hero = ({ profile }) => (
  <motion.section
    className="relative py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white overflow-hidden rounded-3xl mx-6 mt-6 shadow-2xl"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>

    {/* Main Content */}
    <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
      {/* Profile Image */}
      <motion.img
        src={profile.photo}
        alt={profile.name}
        className="mx-auto w-44 h-44 object-cover rounded-full border-4 border-white/20 shadow-2xl mb-8 hover:scale-105 transition-transform duration-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 90 }}
      />

      {/* Name */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-200 via-white to-indigo-200 bg-clip-text text-transparent mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {profile.name}
      </motion.h1>

      {/* Title */}
      <motion.p
        className="text-2xl md:text-3xl text-indigo-200 font-light mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {profile.title}
      </motion.p>

      {/* Bio */}
<motion.div
  className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed mb-10 bg-white/10 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-md"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  dangerouslySetInnerHTML={{ __html: profile.short_bio }}
/>

      {/* Contact Info */}
      <motion.div
        className="flex flex-wrap justify-center gap-5 text-gray-300 text-lg mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors flex items-center gap-2">
          <FaEnvelope className="text-indigo-400" /> {profile.email}
        </a>
        <span className="hidden md:inline text-indigo-300">|</span>
        <a href={`tel:${profile.phone}`} className="hover:text-white transition-colors flex items-center gap-2">
         <FaPhoneAlt className="text-indigo-400" /> {profile.phone}
        </a>
        <span className="hidden md:inline text-indigo-300">|</span>
        <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-indigo-400" /> {profile.location}</span>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="flex justify-center items-center flex-wrap gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        {/* LinkedIn */}
        {profile.linkedin_url && (
          <a href={profile.linkedin_url} target="_blank" rel="noreferrer" className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all group">
            <FaLinkedin className="text-2xl text-blue-400 group-hover:scale-110 transition-transform" />
          </a>
        )}
        {/* GitHub */}
        {profile.github_url && (
          <a href={profile.github_url} target="_blank" rel="noreferrer" className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all group">
            <FaGithub className="text-2xl text-gray-300 group-hover:scale-110 transition-transform" />
          </a>
        )}
        {/* Facebook */}
        {profile.facebook_url && (
          <a href={profile.facebook_url} target="_blank" rel="noreferrer" className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all group">
            <FaFacebook className="text-2xl text-blue-500 group-hover:scale-110 transition-transform" />
          </a>
        )}
        {/* CV Download */}
        {profile.cv && (
          <a href={profile.cv} target="_blank" rel="noreferrer"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-2xl font-semibold text-lg shadow-xl transition-all flex items-center group">
            <FaDownload className="mr-2 group-hover:scale-110 transition-transform" /> Download CV
          </a>
        )}
        {/* Contact CTA */}
        <Link to="/contact"
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 rounded-2xl font-semibold text-lg shadow-xl transition-all flex items-center group">
          <FaBriefcase className="mr-2 group-hover:scale-110 transition-transform" /> Start Conversation
        </Link>
      </motion.div>
    </div>
  </motion.section>
);


export default Hero;