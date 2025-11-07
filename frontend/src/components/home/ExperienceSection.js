import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../common/SectionContainer';
import { FaBriefcase } from 'react-icons/fa';

const ExperienceSection = ({ experiences }) => {
  if (!experiences || experiences.length === 0) return null;

  return (
    <SectionContainer
      title="My Experience"
      subtitle="A summary of my professional experience in the IT field"
      icon={FaBriefcase}
    >
      <div className="relative mt-10 border-l-4 border-indigo-200 pl-6 space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-9 top-10 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Header */}
            <div className="flex flex-wrap justify-between items-start gap-3">
              <div>
                <h3 className="text-2xl font-bold text-indigo-700">
                  {exp.position}
                </h3>
                <p className="text-gray-800 mt-1">
                  <span className="font-semibold">{exp.company}</span>{" "}
                  {exp.company_website && (
                    <a
                      href={exp.company_website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-500 hover:underline ml-1"
                    >
                      ↗
                    </a>
                  )}
                </p>
                <p className="text-sm text-gray-500">{exp.location}</p>
              </div>

              <span className="text-sm font-semibold text-gray-700 bg-indigo-50 px-3 py-1 rounded-full">
                {exp.current
                  ? "On Going"
                  : `${new Date(exp.start_date).toLocaleString("default", {
                      month: "short",
                      year: "numeric",
                    })} - ${
                      exp.end_date
                        ? new Date(exp.end_date).toLocaleString("default", {
                            month: "short",
                            year: "numeric",
                          })
                        : "Present"
                    }`}
              </span>
            </div>

            {/* Description */}
            <div
              className="mt-4 text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: exp.description }}
            />

            {/* Technologies */}
            {exp.technologies?.length > 0 && (
              <div className="mt-6">
                <p className="font-semibold text-indigo-600 text-sm mb-2 uppercase tracking-wide">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};
export default ExperienceSection;