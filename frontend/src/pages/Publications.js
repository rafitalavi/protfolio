import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import SectionContainer from '../components/common/SectionContainer';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

import { API } from '../api';


const Publications = () => {
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        axios.get(`${API}/publications/`).then(res => setPublications(res.data));
    }, []);

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <SectionContainer 
                title="Research Publications" 
                subtitle="Academic contributions and thought leadership in the field"
                icon={FaGraduationCap}
            >
                <div className="space-y-8">
                    {publications.map((pub, index) => (
                        <motion.div 
                            key={pub.id}
                            className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-200 hover:border-indigo-300 transition-all duration-300"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-indigo-700 transition-colors">
                                        {pub.title}
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-4 font-medium">
  {(pub.authors && pub.authors.length > 0 ? pub.authors.join(', ') : "Research Team")} • {pub.journal} 
</p>

                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        {pub.abstract}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-4">
                                        {pub.doi && (
                                            <a 
                                                href={`https://doi.org/${pub.doi}`} 
                                                target="_blank" 
                                                rel="noreferrer"
                                                className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl font-semibold hover:bg-blue-100 transition-colors flex items-center"
                                            >
                                                <FaGraduationCap className="mr-2" />
                                                DOI: {pub.doi}
                                            </a>
                                        )}
                                        {pub.pdf_link && (
                                            <a 
                                                href={pub.pdf_link} 
                                                target="_blank" 
                                                rel="noreferrer"
                                                className="bg-green-50 text-green-700 px-4 py-2 rounded-xl font-semibold hover:bg-green-100 transition-colors flex items-center"
                                            >
                                                <FaBriefcase className="mr-2" />
                                                View PDF
                                            </a>
                                        )}
                                    </div>
                                </div>
                                
                                <div className="lg:w-48 flex-shrink-0">
                                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4 rounded-2xl text-center">
                                        <div className="ml-4 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold shrink-0">
  {pub.publication_date 
    ? new Date(pub.publication_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) 
    : '2023'}</div>
                                        <div className="text-indigo-100 text-sm">Published</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionContainer>
        </div>
    );
};


export default Publications;