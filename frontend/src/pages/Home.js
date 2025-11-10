import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '../components/home/Hero';
import ImpactMetrics from '../components/home/ImpactMetrics';
import SkillsGrid from '../components/home/SkillsGrid';
import Expertise from '../components/home/Expertise';
import ExperienceSection from '../components/home/ExperienceSection';
import ResearchSection from '../components/home/ResearchSection';
import FeaturedProjects from '../components/home/FeaturedProjects';
import EducationSection from '../components/home/EducationSection';
import CertificationsSection from '../components/home/CertificationsSection';
import { API } from '../api';




const Home = () => {
    const [loading, setLoading] = useState(true); // loading state
  const [data, setData] = useState({ 
    profile: null, 
    skills: [], 
    projects: [], 
    expertise: [], 
    publications: [],
    experience: [],
     education: [],
    certifications: [],
  });

useEffect(() => {
 const fetchData = async () => {
  try {
    const [
      profileRes,
      skillsRes,
      projectsRes,
      expertiseRes,
      pubsRes,
      experienceRes,
      educationRes,
      certificationsRes,
    ] = await Promise.all([
      axios.get(`${API}/profile/`),
      axios.get(`${API}/skills/`),
      axios.get(`${API}/projects/`),
      axios.get(`${API}/services/`),
      axios.get(`${API}/publications/`),
      axios.get(`${API}/experiences/`),
      axios.get(`${API}/education/`),
      axios.get(`${API}/certifications/`),
    ]);

    // Ensure all responses are arrays where needed
    const safeData = {
      profile: profileRes.data || null,
      skills: Array.isArray(skillsRes.data) ? skillsRes.data : [],
      projects: Array.isArray(projectsRes.data) ? projectsRes.data : [],
      expertise: Array.isArray(expertiseRes.data) ? expertiseRes.data : [],
      publications: Array.isArray(pubsRes.data) ? pubsRes.data : [],
      experience: Array.isArray(experienceRes.data) ? experienceRes.data : [],
      education: Array.isArray(educationRes.data) ? educationRes.data : [],
      certifications: Array.isArray(certificationsRes.data) ? certificationsRes.data : [],
    };

    setData(safeData);
    setLoading(false);
  } catch (error) {
    console.error("Error fetching data:", error);
    setData({
      profile: null,
      skills: [],
      projects: [],
      expertise: [],
      publications: [],
      experience: [],
      education: [],
      certifications: [],
    });
    setLoading(false);
  }
};


  fetchData();
}, []);

if (!data.profile) return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-indigo-700 mb-4 animate-bounce">
        Welcome to Rafit Alavi's Portfolio
      </h1>
      
      {/* Elegant professional HR */}
      <div className="w-40 md:w-60 h-1 mx-auto mb-4 rounded-full bg-indigo-700/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-slide"></div>
      </div>

      <p className="text-lg text-gray-600 font-medium animate-pulse">
        Loading Profile...
      </p>
    </div>
  </div>
);



  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Hero profile={data.profile} />
      
      <div className="my-20">
        <ImpactMetrics />
         <EducationSection education={data.education} />
        <SkillsGrid skills={data.skills} />
            <ExperienceSection experiences={data.experience} />
             <FeaturedProjects projects={data.projects} />
        <CertificationsSection certifications={data.certifications} />
        <Expertise services={data.expertise} />
    
        <ResearchSection publications={data.publications} />
       
      </div>
    </div>
  );
};

export default Home;