

// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { 
//   FaGraduationCap, 
//   FaBriefcase, 
//   FaEnvelope, 
//   FaCode, 
//   FaGithub, 
//   FaLinkedin, 
//   FaAward, 
//   FaChartLine, 
//   FaUsers, 
//   FaLightbulb,
//   // FaPhone,
//   FaMapMarkerAlt,
//   FaDownload,
//   FaFacebook
// } from 'react-icons/fa';

// const API = 'http://localhost:8000/api';

// // -------------------- Enhanced Utility Components -------------------- //

// const SectionContainer = ({ children, title, icon: Icon, subtitle }) => (
//   <motion.section 
//     className="mb-16"
//     initial={{ y: 30, opacity: 0 }}
//     whileInView={{ y: 0, opacity: 1 }}
//     viewport={{ once: true, amount: 0.1 }}
//     transition={{ duration: 0.7, ease: "easeOut" }}
//   >
//     <div className="text-center mb-10">
//       {Icon && <Icon className="mx-auto text-4xl text-indigo-600 mb-4" />}
//       <h2 className="text-4xl font-bold text-gray-900 mb-3">{title}</h2>
//       {subtitle && <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
//     </div>
//     {children}
//   </motion.section>
// );

// const MetricCard = ({ number, label, icon: Icon }) => (
//   <motion.div 
//     className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
//     whileHover={{ scale: 1.05, y: -5 }}
//     transition={{ type: "spring", stiffness: 300 }}
//   >
//     <Icon className="mx-auto text-3xl text-indigo-600 mb-3" />
//     <div className="text-3xl font-bold text-gray-900 mb-1">{number}</div>
//     <div className="text-gray-600 font-medium">{label}</div>
//   </motion.div>
// );

// // -------------------- Professional Navigation -------------------- //

// const Navbar = () => (
//   <nav className="p-6 shadow-2xl flex justify-between items-center bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/95">
//     <Link to="/" className="text-2xl font-bold text-indigo-700 flex items-center group">
//       <div className="p-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg mr-3 group-hover:scale-110 transition-transform">
//         <FaCode className="text-white text-lg" />
//       </div>
//       <span className="bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
//         Rafit Alavi's Portfolio
//       </span>
//     </Link>
//     <div className="flex items-center space-x-8">
//       <Link to="/projects" className="text-gray-700 hover:text-indigo-700 font-medium transition-all duration-300 hover:font-semibold">Case Studies</Link>
//       <Link to="/publications" className="text-gray-700 hover:text-indigo-700 font-medium transition-all duration-300 hover:font-semibold">Research</Link>
//       <Link to="/contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center group">
//         <FaEnvelope className="mr-2 group-hover:scale-110 transition-transform" />
//         Connect
//       </Link>
//     </div>
//   </nav>
// );

// // -------------------- Executive Summary Hero -------------------- //

// // import React from "react";
// // import { motion } from "framer-motion";
// // import { Link } from "react-router-dom";
// // import {
// //   FaLinkedin,
// //   FaGithub,
// //   FaBriefcase,
// //   FaLightbulb,
// //   FaEnvelope,
// //   FaPhone,
// //   FaMapMarkerAlt,
// //   FaDownload,
// // } from "react-icons/fa";

// const Hero = ({ profile }) => (
//   <motion.section
//     className="relative py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white overflow-hidden rounded-3xl mx-6 mt-6 shadow-2xl"
//     initial={{ opacity: 0, y: 40 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 1 }}
//   >
//     {/* Gradient Overlay */}
//     <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>

//     {/* Main Content */}
//     <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
//       {/* Profile Image */}
//       <motion.img
//         src={profile.photo}
//         alt={profile.name}
//         className="mx-auto w-44 h-44 object-cover rounded-full border-4 border-white/20 shadow-2xl mb-8 hover:scale-105 transition-transform duration-500"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 0.3, type: "spring", stiffness: 90 }}
//       />

//       {/* Name */}
//       <motion.h1
//         className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-200 via-white to-indigo-200 bg-clip-text text-transparent mb-3"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4 }}
//       >
//         {profile.name}
//       </motion.h1>

//       {/* Title */}
//       <motion.p
//         className="text-2xl md:text-3xl text-indigo-200 font-light mb-8"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5 }}
//       >
//         {profile.title}
//       </motion.p>

//       {/* Bio */}
//       <motion.div
//         className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed mb-10 bg-white/10 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-md"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6 }}
//         dangerouslySetInnerHTML={{ __html: profile.short_bio }}
//       />

//       {/* Contact Info */}
//       <motion.div
//         className="flex flex-wrap justify-center gap-5 text-gray-300 text-lg mb-8"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.7 }}
//       >
//         <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors flex items-center gap-2">
//           <FaEnvelope className="text-indigo-400" /> {profile.email}
//         </a>
//         <span className="hidden md:inline text-indigo-300">|</span>
//         <a href={`tel:${profile.phone}`} className="hover:text-white transition-colors flex items-center gap-2">
//           {profile.phone}
//         </a>
//         <span className="hidden md:inline text-indigo-300">|</span>
//         <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-indigo-400" /> {profile.location}</span>
//       </motion.div>

//       {/* Action Buttons */}
//       <motion.div
//         className="flex justify-center items-center flex-wrap gap-6"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.8 }}
//       >
//         {/* LinkedIn */}
//         {profile.linkedin_url && (
//           <a href={profile.linkedin_url} target="_blank" rel="noreferrer" className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all group">
//             <FaLinkedin className="text-2xl text-blue-400 group-hover:scale-110 transition-transform" />
//           </a>
//         )}
//         {/* GitHub */}
//         {profile.github_url && (
//           <a href={profile.github_url} target="_blank" rel="noreferrer" className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all group">
//             <FaGithub className="text-2xl text-gray-300 group-hover:scale-110 transition-transform" />
//           </a>
//         )}
//         {/* Facebook */}
//         {profile.facebook_url && (
//           <a href={profile.facebook_url} target="_blank" rel="noreferrer" className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all group">
//             <FaFacebook className="text-2xl text-blue-500 group-hover:scale-110 transition-transform" />
//           </a>
//         )}
//         {/* CV Download */}
//         {profile.cv && (
//           <a href={profile.cv} target="_blank" rel="noreferrer"
//             className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-2xl font-semibold text-lg shadow-xl transition-all flex items-center group">
//             <FaDownload className="mr-2 group-hover:scale-110 transition-transform" /> Download CV
//           </a>
//         )}
//         {/* Contact CTA */}
//         <Link to="/contact"
//           className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 rounded-2xl font-semibold text-lg shadow-xl transition-all flex items-center group">
//           <FaBriefcase className="mr-2 group-hover:scale-110 transition-transform" /> Start Conversation
//         </Link>
//       </motion.div>
//     </div>
//   </motion.section>
// );




// // -------------------- Business Impact Metrics -------------------- //

// const ImpactMetrics = () => (
//   <SectionContainer title="Measurable Impact" subtitle="Quantifiable results that demonstrate value and expertise" icon={FaChartLine}>
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
//       <MetricCard number="40%" label="Cost Reduction" icon={FaChartLine} />
//       <MetricCard number="25+" label="Projects Delivered" icon={FaBriefcase} />
//       <MetricCard number="15+" label="Research Papers" icon={FaGraduationCap} />
//       <MetricCard number="99.9%" label="System Uptime" icon={FaAward} />
//     </div>
//   </SectionContainer>
// );

// // -------------------- Strategic Expertise -------------------- //

// const Expertise = ({ services }) => (
//   <SectionContainer title="Strategic Expertise" subtitle="Specialized domains where I drive maximum business value" icon={FaUsers}>
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {services.map(service => (
//         <motion.div 
//           key={service.id}
//           className="group p-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl hover:border-indigo-300 transition-all duration-500 hover:shadow-2xl"
//           whileHover={{ y: -10 }}
//         >
//           <div className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//             <FaBriefcase className="text-2xl text-white" />
//           </div>
//           <h3 className="font-bold text-2xl mb-4 text-gray-900 group-hover:text-indigo-700 transition-colors">
//             {service.title}
//           </h3>
//           <div className="text-gray-600 leading-relaxed line-clamp-4 group-hover:text-gray-700 transition-colors" 
//                dangerouslySetInnerHTML={{ __html: service.description }}>
//           </div>
//           <div className="mt-6 pt-6 border-t border-gray-200">
//             <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">Key Value Drivers →</span>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   </SectionContainer>
// );

// // -------------------- Skills with Proficiency -------------------- //

// const SkillsGrid = ({ skills }) => (
//   <SectionContainer title="Technical Competencies" subtitle="Advanced skills aligned with industry demands" icon={FaCode}>
//     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//       {skills.map(skill => (
//         <motion.div 
//           key={skill.id}
//           className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
//           whileHover={{ scale: 1.05 }}
//         >
//           <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-indigo-600 group-hover:to-purple-600 transition-all">
//             <FaCode className="text-2xl text-white" />
//           </div>
//           <p className="font-bold text-gray-900 text-lg mb-2">{skill.name}</p>
//           <div className="w-full bg-gray-200 rounded-full h-2">
//             <motion.div 
//               className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
//               initial={{ width: 0 }}
//               whileInView={{ width: `${skill.proficiency || 85}%` }}
//               transition={{ duration: 1, delay: 0.2 }}
//             />
//           </div>
//           <p className="text-sm text-gray-600 mt-2">{skill.proficiency || 85}% Proficiency</p>
//         </motion.div>
//       ))}
//     </div>
//   </SectionContainer>
// );

// // -------------------- Academic Excellence -------------------- //

// const ResearchSection = ({ publications }) => (
//   <SectionContainer title="Academic Contributions" subtitle="Peer-reviewed research and thought leadership" icon={FaGraduationCap}>
//     <div className="grid md:grid-cols-2 gap-8">
//       {publications.slice(0, 4).map(pub => (
//         <motion.div 
//           key={pub.id}
//           className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl hover:border-blue-300 transition-all duration-300 group"
//           whileHover={{ y: -5 }}
//         >
//           <div className="flex items-start justify-between mb-4">
//             <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors flex-1">
//               {pub.title}
//             </h3>
//             <span className="ml-4 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold shrink-0">
//               {pub.year || '2023'}
//             </span>
//           </div>
//           <p className="text-sm text-gray-600 mb-3 font-medium">
//             {pub.journal} • {pub.authors}
//           </p>
//           <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
//             {pub.abstract}
//           </p>
//           <div className="flex items-center justify-between">
//             <Link to={`/publications/${pub.id}`} className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center group">
//               Read Research
//               <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
//             </Link>
//             {pub.doi && (
//               <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-700 text-sm">
//                 DOI
//               </a>
//             )}
//           </div>
//         </motion.div>
//       ))}
//     </div>
//     <div className="text-center mt-12">
//       <Link to="/publications" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center group">
//         Explore All Research
//         <FaGraduationCap className="ml-2 group-hover:scale-110 transition-transform" />
//       </Link>
//     </div>
//   </SectionContainer>
// );

// // -------------------- Business-Focused Projects -------------------- //

// const FeaturedProjects = ({ projects }) => (
//   <SectionContainer title="Strategic Case Studies" subtitle="Real-world solutions delivering measurable business impact" icon={FaBriefcase}>
//     <div className="grid lg:grid-cols-2 gap-8">
//       {projects.filter(p => p.featured).slice(0, 4).map(p => (
//         <motion.div 
//           key={p.id}
//           className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200"
//           whileHover={{ y: -10 }}
//         >
//           {p.image && (
//             <div className="relative overflow-hidden h-64">
//               <img 
//                 src={p.image} 
//                 alt={p.title} 
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//               <div className="absolute bottom-4 left-6">
//                 <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
//                   Featured Project
//                 </span>
//               </div>
//             </div>
//           )}
//           <div className="p-8">
//             <div className="flex items-start justify-between mb-4">
//               <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors flex-1">
//                 {p.title}
//               </h3>
//               <span className="ml-4 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold shrink-0">
//                 {p.business_value || 'High Impact'}
//               </span>
//             </div>
//             <p className="text-lg text-indigo-600 font-semibold mb-4">{p.role || 'Lead Architect'}</p>
//             <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3">
//               {p.short_impact || 'Delivered significant ROI through innovative solution architecture...'}
//             </p>
            
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex flex-wrap gap-2">
//                 {p.technologies?.slice(0, 3).map((tech, index) => (
//                   <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="flex items-center justify-between pt-6 border-t border-gray-200">
//               <Link 
//                 to={`/projects/${p.id}`} 
//                 className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center group"
//               >
//                 View Case Study
//                 <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
//               </Link>
//               {p.github_url && (
//                 <a href={p.github_url} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors">
//                   <FaGithub className="text-xl" />
//                 </a>
//               )}
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   </SectionContainer>
// );

// // -------------------- Enhanced Home Component -------------------- //

// const Home = () => {
//   const [data, setData] = useState({ 
//     profile: null, 
//     skills: [], 
//     projects: [], 
//     expertise: [], 
//     publications: [],
//     experience : [],
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [profileRes, skillsRes, projectsRes, expertiseRes, pubsRes ,experienceRes] = await Promise.all([
//           axios.get(`${API}/profile/`),
//           axios.get(`${API}/skills/`),
//           axios.get(`${API}/projects/`),
//           axios.get(`${API}/services/`),
//           axios.get(`${API}/publications/`),
//           axios.get(`${API}/experiences/`),
//         ]);
//         setData({
//           profile: profileRes.data,
//           skills: skillsRes.data,
//           projects: projectsRes.data,
//           expertise: expertiseRes.data,
//           publications: pubsRes.data,
//           experience: experienceRes.data,
//         });
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   if (!data.profile) return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="text-center">
//         <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//         <p className="text-xl text-gray-600 font-semibold">Loading Professional Profile...</p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <Hero profile={data.profile} />
      
//       <div className="my-20">
//         <ImpactMetrics />
        
//         {/* <SectionContainer title="Professional Summary" icon={FaUsers}>
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="text-xl text-gray-700 leading-relaxed bg-white p-8 rounded-3xl shadow-lg border border-gray-200" 
//                  dangerouslySetInnerHTML={{ __html: data.profile.short_bio }}>
//             </div>
//           </div>
//         </SectionContainer> */}

//         <SkillsGrid skills={data.skills} />
//         <Expertise services={data.expertise} />
//         <ExperienceSection experiences={data.experience} />
//         <ResearchSection publications={data.publications} />
//         <FeaturedProjects projects={data.projects} />
//       </div>
//     </div>
//   );
// };

// // --------------------Experience Page -------------------- //
// const ExperienceSection = ({ experiences }) => {
//   if (!experiences || experiences.length === 0) return null;

//   return (
//     <SectionContainer
//       title="My Experience"
//       subtitle="A summary of my professional experience in the IT field"
//       icon={FaBriefcase}
//     >
//       <div className="relative mt-10 border-l-4 border-indigo-200 pl-6 space-y-10">
//         {experiences.map((exp, index) => (
//           <motion.div
//             key={exp.id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500"
//           >
//             {/* Timeline Dot */}
//             <div className="absolute -left-9 top-10 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
//               {String(index + 1).padStart(2, "0")}
//             </div>

//             {/* Header */}
//             <div className="flex flex-wrap justify-between items-start gap-3">
//               <div>
//                 <h3 className="text-2xl font-bold text-indigo-700">
//                   {exp.position}
//                 </h3>
//                 <p className="text-gray-800 mt-1">
//                   <span className="font-semibold">{exp.company}</span>{" "}
//                   {exp.company_website && (
//                     <a
//                       href={exp.company_website}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-indigo-500 hover:underline ml-1"
//                     >
//                       ↗
//                     </a>
//                   )}
//                 </p>
//                 <p className="text-sm text-gray-500">{exp.location}</p>
//               </div>

//               <span className="text-sm font-semibold text-gray-700 bg-indigo-50 px-3 py-1 rounded-full">
//                 {exp.current
//                   ? "On Going"
//                   : `${new Date(exp.start_date).toLocaleString("default", {
//                       month: "short",
//                       year: "numeric",
//                     })} - ${
//                       exp.end_date
//                         ? new Date(exp.end_date).toLocaleString("default", {
//                             month: "short",
//                             year: "numeric",
//                           })
//                         : "Present"
//                     }`}
//               </span>
//             </div>

//             {/* Description */}
//             <div
//               className="mt-4 text-gray-700 leading-relaxed"
//               dangerouslySetInnerHTML={{ __html: exp.description }}
//             />

//             {/* Technologies */}
//             {exp.technologies?.length > 0 && (
//               <div className="mt-6">
//                 <p className="font-semibold text-indigo-600 text-sm mb-2 uppercase tracking-wide">
//                   Technologies
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {exp.technologies.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </SectionContainer>
//   );
// };
// // -------------------- Projects Page -------------------- //

// const Projects = () => {
//     const [projects, setProjects] = useState([]);

//     useEffect(() => {
//         axios.get(`${API}/projects/`).then(res => setProjects(res.data));
//     }, []);

//     return (
//         <div className="p-6 max-w-7xl mx-auto">
//             <SectionContainer 
//                 title="Project Portfolio" 
//                 subtitle="Comprehensive case studies showcasing technical excellence and business impact"
//                 icon={FaBriefcase}
//             >
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {projects.map(project => (
//                         <motion.div
//                             key={project.id}
//                             className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200 group"
//                             whileHover={{ y: -8 }}
//                         >
//                             {project.image && (
//                                 <div className="relative overflow-hidden h-48">
//                                     <img 
//                                         src={project.image} 
//                                         alt={project.title}
//                                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//                                 </div>
//                             )}
//                             <div className="p-6">
//                                 <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-indigo-700 transition-colors">
//                                     {project.title}
//                                 </h3>
//                                 <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed">
//                                     {project.description}
//                                 </p>
//                                 <div className="flex items-center justify-between">
//                                     <Link 
//                                         to={`/projects/${project.id}`}
//                                         className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm flex items-center group"
//                                     >
//                                         View Details
//                                         <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
//                                     </Link>
//                                     <span className="text-sm text-gray-500">
//                                         {project.duration || 'Ongoing'}
//                                     </span>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </SectionContainer>
//         </div>
//     );
// };

// // -------------------- Project Detail Page -------------------- //

// const ProjectDetail = () => {
//     const { id } = useParams();
//     const [project, setProject] = useState(null);

//     useEffect(() => {
//         axios.get(`${API}/projects/${id}/`).then(res => setProject(res.data));
//     }, [id]);

//     if (!project) return (
//         <div className="min-h-screen flex items-center justify-center">
//             <div className="text-center">
//                 <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//                 <p className="text-xl text-gray-600 font-semibold">Loading Project Details...</p>
//             </div>
//         </div>
//     );

//     return (
//         <motion.div 
//             className="p-6 max-w-6xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//         >
//             <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
//                 {project.image && (
//                     <div className="relative h-96 overflow-hidden">
//                         <img 
//                             src={project.image} 
//                             alt={project.title}
//                             className="w-full h-full object-cover"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                         <div className="absolute bottom-8 left-8 text-white">
//                             <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
//                             <p className="text-xl text-gray-200">{project.subtitle}</p>
//                         </div>
//                     </div>
//                 )}
                
//                 <div className="p-8 md:p-12">
//                     <div className="grid md:grid-cols-4 gap-8 mb-12 bg-gray-50 p-8 rounded-2xl">
//                         <div className="text-center">
//                             <h3 className="font-bold text-lg text-gray-800 mb-2">Role</h3>
//                             <p className="text-indigo-600 font-semibold">{project.role || "Lead Developer"}</p>
//                         </div>
//                         <div className="text-center">
//                             <h3 className="font-bold text-lg text-gray-800 mb-2">Timeline</h3>
//                             <p className="text-indigo-600 font-semibold">{project.duration || "6 months"}</p>
//                         </div>
//                         <div className="text-center">
//                             <h3 className="font-bold text-lg text-gray-800 mb-2">Status</h3>
//                             <p className="text-indigo-600 font-semibold">{project.status || "Completed"}</p>
//                         </div>
//                         <div className="text-center">
//                             <h3 className="font-bold text-lg text-gray-800 mb-2">Business Value</h3>
//                             <p className="text-indigo-600 font-semibold">{project.business_value || "High Impact"}</p>
//                         </div>
//                     </div>

//                     <div className="grid lg:grid-cols-3 gap-12">
//                         <div className="lg:col-span-2">
//                             <SectionContainer title="Project Overview" subtitle="Comprehensive solution analysis">
//                                 <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed" 
//                                      dangerouslySetInnerHTML={{ __html: project.long_description || project.description }}>
//                                 </div>
//                             </SectionContainer>

//                             <SectionContainer title="Key Achievements & Impact" subtitle="Measurable results and outcomes">
//                                 <div className="space-y-4">
//                                     {project.impact_points ? project.impact_points.map((point, index) => (
//                                         <div key={index} className="flex items-start space-x-4 p-4 bg-green-50 rounded-2xl">
//                                             <FaAward className="text-green-600 mt-1 flex-shrink-0" />
//                                             <p className="text-gray-800 font-medium">{point}</p>
//                                         </div>
//                                     )) : (
//                                         <p className="text-gray-600">Impact metrics and achievements documentation in progress.</p>
//                                     )}
//                                 </div>
//                             </SectionContainer>
//                         </div>

//                         <div className="space-y-8">
//                             <div className="bg-indigo-50 p-6 rounded-2xl">
//                                 <h3 className="font-bold text-xl mb-4 text-gray-900">Technologies Used</h3>
//                                 <div className="flex flex-wrap gap-2">
//                                     {project.technologies?.map((tech, index) => (
//                                         <span key={index} className="px-3 py-2 bg-white text-indigo-700 rounded-xl text-sm font-medium border border-indigo-200">
//                                             {tech}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className="bg-gray-50 p-6 rounded-2xl">
//                                 <h3 className="font-bold text-xl mb-4 text-gray-900">Project Links</h3>
//                                 <div className="space-y-3">
//                                     {project.github_url && (
//                                         <a href={project.github_url} target="_blank" rel="noreferrer" className="flex items-center space-x-3 text-gray-700 hover:text-indigo-700 transition-colors p-3 rounded-lg hover:bg-white">
//                                             <FaGithub className="text-xl" />
//                                             <span className="font-medium">View Source Code</span>
//                                         </a>
//                                     )}
//                                     {project.live_url && (
//                                         <a href={project.live_url} target="_blank" rel="noreferrer" className="flex items-center space-x-3 text-gray-700 hover:text-indigo-700 transition-colors p-3 rounded-lg hover:bg-white">
//                                             <FaBriefcase className="text-lg" />
//                                             <span className="font-medium">Live Demo</span>
//                                         </a>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// // -------------------- Publications Page -------------------- //

// const Publications = () => {
//     const [publications, setPublications] = useState([]);

//     useEffect(() => {
//         axios.get(`${API}/publications/`).then(res => setPublications(res.data));
//     }, []);

//     return (
//         <div className="p-6 max-w-6xl mx-auto">
//             <SectionContainer 
//                 title="Research Publications" 
//                 subtitle="Academic contributions and thought leadership in the field"
//                 icon={FaGraduationCap}
//             >
//                 <div className="space-y-8">
//                     {publications.map((pub, index) => (
//                         <motion.div 
//                             key={pub.id}
//                             className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-200 hover:border-indigo-300 transition-all duration-300"
//                             initial={{ x: -20, opacity: 0 }}
//                             animate={{ x: 0, opacity: 1 }}
//                             transition={{ delay: index * 0.1 }}
//                         >
//                             <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
//                                 <div className="flex-1">
//                                     <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-indigo-700 transition-colors">
//                                         {pub.title}
//                                     </h2>
//                                     <p className="text-lg text-gray-600 mb-4 font-medium">
//                                         {pub.authors || "Research Team"} • {pub.journal} • {pub.year || "2023"}
//                                     </p>
//                                     <p className="text-gray-700 leading-relaxed mb-6">
//                                         {pub.abstract}
//                                     </p>
                                    
//                                     <div className="flex flex-wrap gap-4">
//                                         {pub.doi && (
//                                             <a 
//                                                 href={`https://doi.org/${pub.doi}`} 
//                                                 target="_blank" 
//                                                 rel="noreferrer"
//                                                 className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl font-semibold hover:bg-blue-100 transition-colors flex items-center"
//                                             >
//                                                 <FaGraduationCap className="mr-2" />
//                                                 DOI: {pub.doi}
//                                             </a>
//                                         )}
//                                         {pub.pdf_link && (
//                                             <a 
//                                                 href={pub.pdf_link} 
//                                                 target="_blank" 
//                                                 rel="noreferrer"
//                                                 className="bg-green-50 text-green-700 px-4 py-2 rounded-xl font-semibold hover:bg-green-100 transition-colors flex items-center"
//                                             >
//                                                 <FaBriefcase className="mr-2" />
//                                                 View PDF
//                                             </a>
//                                         )}
//                                     </div>
//                                 </div>
                                
//                                 <div className="lg:w-48 flex-shrink-0">
//                                     <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4 rounded-2xl text-center">
//                                         <div className="text-3xl font-bold mb-1">{pub.year || '2023'}</div>
//                                         <div className="text-indigo-100 text-sm">Published</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </SectionContainer>
//         </div>
//     );
// };

// // -------------------- Contact Page -------------------- //

// const Contact = () => {
//     const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
//     const [sent, setSent] = useState(false);
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleSubmit = async e => {
//         e.preventDefault();
//         setIsSubmitting(true);
//         try {
//             await axios.post(`${API}/contact/`, form);
//             setSent(true);
//         } catch (error) {
//             console.error("Contact form error:", error);
//             alert("Failed to send message. Please try again or email me directly.");
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <div className="p-6 max-w-6xl mx-auto">
//             <SectionContainer 
//                 title="Get In Touch" 
//                 subtitle="Let's discuss opportunities for collaboration, research, or innovation"
//                 icon={FaEnvelope}
//             >
//                 <div className="grid lg:grid-cols-2 gap-12">
//                     <motion.div
//                         className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-8 rounded-3xl shadow-2xl"
//                         initial={{ x: -50, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                     >
//                         <h3 className="text-2xl font-bold mb-6">Why Connect?</h3>
//                         <div className="space-y-6">
//                             <div className="flex items-start space-x-4">
//                                 <div className="bg-white/20 p-3 rounded-2xl">
//                                     <FaBriefcase className="text-xl" />
//                                 </div>
//                                 <div>
//                                     <h4 className="font-bold text-lg mb-2">Career Opportunities</h4>
//                                     <p className="text-indigo-100">Discuss roles where I can drive innovation and deliver measurable results.</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-start space-x-4">
//                                 <div className="bg-white/20 p-3 rounded-2xl">
//                                     <FaGraduationCap className="text-xl" />
//                                 </div>
//                                 <div>
//                                     <h4 className="font-bold text-lg mb-2">Research Collaboration</h4>
//                                     <p className="text-indigo-100">Explore academic partnerships and cutting-edge research projects.</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-start space-x-4">
//                                 <div className="bg-white/20 p-3 rounded-2xl">
//                                     <FaUsers className="text-xl" />
//                                 </div>
//                                 <div>
//                                     <h4 className="font-bold text-lg mb-2">Strategic Consulting</h4>
//                                     <p className="text-indigo-100">Leverage expertise for your organization's technical challenges.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>

//                     <motion.div
//                         className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-200"
//                         initial={{ x: 50, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                     >
//                         {sent ? (
//                             <div className="text-center py-12">
//                                 <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                                     <FaEnvelope className="text-3xl text-green-600" />
//                                 </div>
//                                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
//                                 <p className="text-gray-600 mb-8">
//                                     Thank you for reaching out. I'll respond within 24 hours to discuss next steps.
//                                 </p>
//                                 <button 
//                                     onClick={() => setSent(false)}
//                                     className="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-indigo-700 transition-colors"
//                                 >
//                                     Send Another Message
//                                 </button>
//                             </div>
//                         ) : (
//                             <form onSubmit={handleSubmit} className="space-y-6">
//                                 <div className="grid md:grid-cols-2 gap-6">
//                                     <div>
//                                         <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
//                                         <input 
//                                             type="text" 
//                                             name="name"
//                                             placeholder="Enter your full name"
//                                             onChange={e => setForm({ ...form, name: e.target.value })}
//                                             className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                                             required
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
//                                         <input 
//                                             type="email" 
//                                             name="email"
//                                             placeholder="your.email@company.com"
//                                             onChange={e => setForm({ ...form, email: e.target.value })}
//                                             className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                                             required
//                                         />
//                                     </div>
//                                 </div>
                                
//                                 <div>
//                                     <label className="block text-gray-700 font-semibold mb-2">Inquiry Type</label>
//                                     <select 
//                                         name="subject"
//                                         onChange={e => setForm({ ...form, subject: e.target.value })}
//                                         className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                                         required
//                                     >
//                                         <option value="">Select purpose of contact</option>
//                                         <option value="HR_Inquiry">Career Opportunity</option>
//                                         <option value="Academic_Research">Research Collaboration</option>
//                                         <option value="Technical_Consulting">Technical Consulting</option>
//                                         <option value="General">General Inquiry</option>
//                                     </select>
//                                 </div>
                                
//                                 <div>
//                                     <label className="block text-gray-700 font-semibold mb-2">Message</label>
//                                     <textarea 
//                                         name="message"
//                                         placeholder="Describe your project, opportunity, or how we can collaborate..."
//                                         rows="6"
//                                         onChange={e => setForm({ ...form, message: e.target.value })}
//                                         className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                                         required
//                                     />
//                                 </div>
                                
//                                 <button 
//                                     type="submit" 
//                                     disabled={isSubmitting}
//                                     className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//                                 >
//                                     {isSubmitting ? (
//                                         <div className="flex items-center justify-center">
//                                             <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
//                                             Sending Message...
//                                         </div>
//                                     ) : (
//                                         "Send Professional Inquiry"
//                                     )}
//                                 </button>
//                             </form>
//                         )}
//                     </motion.div>
//                 </div>
//             </SectionContainer>
//         </div>
//     );
// };

// // -------------------- Main App Component -------------------- //

// const App = () => {
//     return (
//         <Router>
//             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
//                 <Navbar />
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/projects" element={<Projects />} />
        
//                     <Route path="/projects/:id" element={<ProjectDetail />} />
//                     <Route path="/publications" element={<Publications />} />
//                     <Route path="/contact" element={<Contact />} />
//                 </Routes>
                
//                 <footer className="bg-gray-900 text-white py-12 mt-20">
//                     <div className="max-w-6xl mx-auto px-6 text-center">
//                         <div className="flex justify-center items-center mb-6">
//                             <div className="p-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg mr-3">
//                                 <FaCode className="text-white text-lg" />
//                             </div>
//                             <span className="text-2xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
//                                 Professional Portfolio
//                             </span>
//                         </div>
//                         <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
//                             Driving innovation through technology and research. Let's build the future together.
//                         </p>
//                         <div className="flex justify-center gap-6 mb-6">
//                             <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
//                             <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
//                             <a href="#" className="text-gray-400 hover:text-white transition-colors">Research Gate</a>
//                         </div>
//                         <p className="text-gray-500 text-sm">
//                             &copy; {new Date().getFullYear()} Professional Portfolio. Built with React & Tailwind CSS.
//                         </p>
//                     </div>
//                 </footer>
//             </div>
//         </Router>
//     );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Publications from './pages/Publications';
import Contact from './pages/Contact';

const App = () => {
    return (
        <Router>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:id" element={<ProjectDetail />} />
                    <Route path="/publications" element={<Publications />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;