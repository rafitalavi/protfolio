import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../common/SectionContainer';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const EducationSection = ({ education }) => {
  if (!education || education.length === 0) return ( <SectionContainer
      title="Education"
      subtitle="My academic background and qualifications"
      icon={FaGraduationCap}
    ></SectionContainer>);

  // Sort by most recent first
  const sortedEducation = [...education].sort((a, b) => {
    const dateA = a.end_date ? new Date(a.end_date) : new Date();
    const dateB = b.end_date ? new Date(b.end_date) : new Date();
    return dateB - dateA;
  });

  return (
    <SectionContainer
      title="Education"
      subtitle="My academic background and qualifications"
      icon={FaGraduationCap}
    >
      {/* Three Column Layout for 3 Items */}
      <div className="grid md:grid-cols-3 gap-6">
        {sortedEducation.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 overflow-hidden group h-full flex flex-col"
          >
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between mb-3">
                <FaGraduationCap className="text-2xl" />
                {edu.grade && (
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                    {edu.grade}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-100 transition-colors">
                {edu.degree}
              </h3>
              <p className="text-indigo-100 font-semibold">
                {edu.institution}
              </p>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <FaCalendarAlt className="text-indigo-500 flex-shrink-0" />
                  <span className="text-sm">
                    {new Date(edu.start_date).getFullYear()} - {' '}
                    {edu.end_date ? new Date(edu.end_date).getFullYear() : 'Present'}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaMapMarkerAlt className="text-indigo-500 flex-shrink-0" />
                  <span className="text-sm">{edu.location}</span>
                </div>
              </div>

              {/* Simple Description Only */}
              {edu.description && (
                <div className="flex-1">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education Summary Stats - Simplified */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12"
      >
        <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="text-3xl font-bold text-indigo-600 mb-2">
            {education.length}
          </div>
          <div className="text-gray-600 font-semibold">Degrees</div>
        </div>
        <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="text-3xl font-bold text-indigo-600 mb-2">
            {education.filter(edu => !edu.end_date || new Date(edu.end_date) > new Date()).length}
          </div>
          <div className="text-gray-600 font-semibold">Ongoing</div>
        </div>
        <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="text-3xl font-bold text-indigo-600 mb-2">
            {new Date().getFullYear() - Math.min(...education.map(edu => new Date(edu.start_date).getFullYear()))}
          </div>
          <div className="text-gray-600 font-semibold">Years of Study</div>
        </div>
      </motion.div> */}
    </SectionContainer>
  );
};

export default EducationSection;