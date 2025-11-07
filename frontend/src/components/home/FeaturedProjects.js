import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionContainer from '../common/SectionContainer';
import { FaBriefcase, FaGithub } from 'react-icons/fa';

const FeaturedProjects = ({ projects }) => (
  <SectionContainer title="My Recent Works" subtitle="Real-world solutions delivering measurable business impact" icon={FaBriefcase}>
    <div className="grid lg:grid-cols-2 gap-8">
      {projects.filter(p => p.featured).slice(0, 4).map(p => (
        <motion.div 
          key={p.id}
          className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200"
          whileHover={{ y: -10 }}
        >
          {p.image && (
            <div className="relative overflow-hidden h-64">
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-6">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Featured Project
                </span>
              </div>
            </div>
          )}
          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors flex-1">
                {p.title}
              </h3>
              <span className="ml-4 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold shrink-0">
                {p.business_value || 'High Impact'}
              </span>
            </div>
            <p className="text-lg text-indigo-600 font-semibold mb-4">{p.role || 'Lead Architect'}</p>
            <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3">
              {p.short_impact || 'Delivered significant ROI through innovative solution architecture...'}
            </p>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex flex-wrap gap-2">
                {p.technologies?.slice(0, 3).map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <Link 
                to={`/projects/${p.id}`} 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center group"
              >
                View Details
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              {p.github_url && (
                <a href={p.github_url} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <FaGithub className="text-xl" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionContainer>
);

export default FeaturedProjects;