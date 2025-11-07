import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import SectionContainer from '../components/common/SectionContainer';
import { FaAward, FaGithub, FaBriefcase, FaImage } from 'react-icons/fa';

import { API } from '../api';

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        axios.get(`${API}/projects/${id}/`).then(res => setProject(res.data));
    }, [id]);

    if (!project) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-xl text-gray-600 font-semibold">Loading Project Details...</p>
            </div>
        </div>
    );

    // Function to get full image URL
    const getImageUrl = (imagePath) => {
        if (!imagePath) return null;
        // If it's already a full URL, return as is
        if (imagePath.startsWith('http')) return imagePath;
        // If it's a relative path, prepend the API base URL
        return `${API}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`;
    };

    const imageUrl = getImageUrl(project.image);

    return (
        <motion.div 
            className="p-6 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Image Section with Fallback */}
                {imageUrl && !imageError ? (
                    <div className="relative h-96 overflow-hidden">
                        <img 
                            src={imageUrl} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                            onError={() => setImageError(true)}
                            onLoad={() => setImageError(false)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 text-white">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                            <p className="text-xl text-gray-200">{project.subtitle}</p>
                        </div>
                    </div>
                ) : (
                    // Fallback when no image or image fails to load
                    <div className="relative h-64 bg-gradient-to-r from-indigo-500 to-purple-600 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white">
                                <FaImage className="text-6xl mb-4 opacity-50 mx-auto" />
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                                <p className="text-xl text-indigo-100">{project.subtitle}</p>
                            </div>
                        </div>
                    </div>
                )}
                
                <div className="p-8 md:p-12">
                    {/* Project Metadata */}
                    <div className="grid md:grid-cols-4 gap-6 mb-12 bg-gray-50 p-8 rounded-2xl">
                        <div className="text-center">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Role</h3>
                            <p className="text-indigo-600 font-semibold">{project.role || "Lead Developer"}</p>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Timeline</h3>
                            <p className="text-indigo-600 font-semibold">{project.duration || "6 months"}</p>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Status</h3>
                            <p className="text-indigo-600 font-semibold">{project.status || "Completed"}</p>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Business Value</h3>
                            <p className="text-indigo-600 font-semibold">{project.business_value || "High Impact"}</p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            {/* Project Overview */}
                            <SectionContainer title="Project Overview" subtitle="Comprehensive solution analysis">
                                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed" 
                                     dangerouslySetInnerHTML={{ __html: project.long_description || project.description }}>
                                </div>
                            </SectionContainer>

                            {/* Key Achievements
                            <SectionContainer title="Key Achievements & Impact" subtitle="Measurable results and outcomes">
                                <div className="space-y-4">
                                    {project.impact_points && project.impact_points.length > 0 ? (
                                        project.impact_points.map((point, index) => (
                                            <div key={index} className="flex items-start space-x-4 p-4 bg-green-50 rounded-2xl">
                                                <FaAward className="text-green-600 mt-1 flex-shrink-0" />
                                                <p className="text-gray-800 font-medium">{point}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center py-8 text-gray-500">
                                            <FaAward className="text-4xl text-gray-300 mx-auto mb-4" />
                                            <p>Impact metrics and achievements documentation in progress.</p>
                                        </div>
                                    )}
                                </div>
                            </SectionContainer> */}

                            {/* Additional Images Gallery */}
                            {project.additional_images && project.additional_images.length > 0 && (
                                <SectionContainer title="Project Gallery" subtitle="Additional screenshots and visuals">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {project.additional_images.map((img, index) => (
                                            <motion.div
                                                key={index}
                                                className="aspect-video bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
                                                whileHover={{ scale: 1.05 }}
                                                onClick={() => window.open(getImageUrl(img), '_blank')}
                                            >
                                                <img 
                                                    src={getImageUrl(img)} 
                                                    alt={`${project.title} screenshot ${index + 1}`}
                                                    className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </SectionContainer>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Technologies */}
                            <div className="bg-indigo-50 p-6 rounded-2xl">
                                <h3 className="font-bold text-xl mb-4 text-gray-900">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies && project.technologies.length > 0 ? (
                                        project.technologies.map((tech, index) => (
                                            <span 
                                                key={index} 
                                                className="px-3 py-2 bg-white text-indigo-700 rounded-xl text-sm font-medium border border-indigo-200 hover:bg-indigo-100 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))
                                    ) : (
                                        <p className="text-gray-500 text-sm">No technologies listed</p>
                                    )}
                                </div>
                            </div>

                            {/* Project Links */}
                            <div className="bg-gray-50 p-6 rounded-2xl">
                                <h3 className="font-bold text-xl mb-4 text-gray-900">Project Links</h3>
                                <div className="space-y-3">
                                    {project.github_url && (
                                        <a 
                                            href={project.github_url} 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            className="flex items-center space-x-3 text-gray-700 hover:text-indigo-700 transition-colors p-3 rounded-lg hover:bg-white group"
                                        >
                                            <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
                                            <span className="font-medium">View Source Code</span>
                                        </a>
                                    )}
                                    {project.live_url && (
                                        <a 
                                            href={project.live_url} 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            className="flex items-center space-x-3 text-gray-700 hover:text-indigo-700 transition-colors p-3 rounded-lg hover:bg-white group"
                                        >
                                            <FaBriefcase className="text-lg group-hover:scale-110 transition-transform" />
                                            <span className="font-medium">Live Demo</span>
                                        </a>
                                    )}
                                    {!project.github_url && !project.live_url && (
                                        <p className="text-gray-500 text-sm text-center py-4">No project links available</p>
                                    )}
                                </div>
                            </div>

                            {/* Project Details */}
                            {/* <div className="bg-white border border-gray-200 p-6 rounded-2xl">
                                <h3 className="font-bold text-xl mb-4 text-gray-900">Project Details</h3>
                                <div className="space-y-3">
                                    {project.category && (
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Category:</span>
                                            <span className="font-medium">{project.category}</span>
                                        </div>
                                    )}
                                    {project.team_size && (
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Team Size:</span>
                                            <span className="font-medium">{project.team_size} people</span>
                                        </div>
                                    )}
                                    {project.client && (
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Client:</span>
                                            <span className="font-medium">{project.client}</span>
                                        </div>
                                    )}
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;