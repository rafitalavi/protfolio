import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../common/SectionContainer';
import { FaBriefcase, FaUsers } from 'react-icons/fa';

const Expertise = ({ services }) => (
  <SectionContainer title="Strategic Expertise" subtitle="Specialized domains where I drive maximum business value" icon={FaUsers}>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map(service => (
        <motion.div 
          key={service.id}
          className="group p-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl hover:border-indigo-300 transition-all duration-500 hover:shadow-2xl"
          whileHover={{ y: -10 }}
        >
          <div className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <FaBriefcase className="text-2xl text-white" />
          </div>
          <h3 className="font-bold text-2xl mb-4 text-gray-900 group-hover:text-indigo-700 transition-colors">
            {service.title}
          </h3>
          <div className="text-gray-600 leading-relaxed line-clamp-4 group-hover:text-gray-700 transition-colors" 
               dangerouslySetInnerHTML={{ __html: service.description }}>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">Key Value Drivers →</span>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionContainer>
);

export default Expertise;