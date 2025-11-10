import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionContainer from '../common/SectionContainer';
import { FaGraduationCap } from 'react-icons/fa';

const ResearchSection = ({ publications }) => (
  console.log('Publications Data:', publications),
  <SectionContainer title="Research" subtitle="Peer-reviewed research and thought leadership" icon={FaGraduationCap}>
    <div className="grid md:grid-cols-2 gap-8">
      {publications.slice(0, 4).map(pub => (
        <motion.div 
          key={pub.id}
          className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl hover:border-blue-300 transition-all duration-300 group"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors flex-1">
              {pub.title}
            </h3>
            <span className="ml-4 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold shrink-0">
  {pub.publication_date 
    ? new Date(pub.publication_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) 
    : '2023'}
</span>

          </div>
          <p className="text-sm text-gray-600 mb-3 font-medium">
            {pub.journal} • {pub.authors}
          </p>
          <div
  className="text-gray-700 leading-relaxed mb-4 line-clamp-3"
  dangerouslySetInnerHTML={{ __html: pub.abstract }}
/>
          <div className="flex items-center justify-between">
            <Link to={`/publications/`} className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center group">
              Read Research
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            {pub.doi && (
              <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-700 text-sm">
                DOI
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
    <div className="text-center mt-12">
      <Link to="/publications" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center group">
        Explore All Research
        <FaGraduationCap className="ml-2 group-hover:scale-110 transition-transform" />
      </Link>
    </div>
  </SectionContainer>
);


export default ResearchSection;