import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionContainer from '../components/common/SectionContainer';
import { FaBriefcase } from 'react-icons/fa';

const API = 'http://localhost:8000/api';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get(`${API}/projects/`).then(res => setProjects(res.data));
    }, []);

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <SectionContainer 
                title="Project Portfolio" 
                subtitle="Comprehensive case studies showcasing technical excellence and business impact"
                icon={FaBriefcase}
            >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <motion.div
                            key={project.id}
                            className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200 group"
                            whileHover={{ y: -8 }}
                        >
                            {project.image && (
                                <div className="relative overflow-hidden h-48">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-indigo-700 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <Link 
                                        to={`/projects/${project.id}`}
                                        className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm flex items-center group"
                                    >
                                        View Details
                                        <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                    </Link>
                                    <span className="text-sm text-gray-500">
                                        {project.duration || 'Ongoing'}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionContainer>
        </div>
    );
};

export default Projects;