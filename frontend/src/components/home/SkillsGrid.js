import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../common/SectionContainer';
import DOMPurify from 'dompurify';
import { FaCode } from 'react-icons/fa';
import { SiHyperskill } from "react-icons/si";

const SkillsGrid = ({ skills }) => (
  <SectionContainer 
    title="Technical Competencies" 
    subtitle="Advanced skills aligned with industry demands" 
    icon={SiHyperskill}
  >
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {skills.map(skill => (
        <motion.div 
          key={skill.id}
          className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-indigo-600 group-hover:to-purple-600 transition-all">
         {/* ✅ Render Font Awesome icon safely (keeps white color) */}
            {skill.icon && skill.icon.trim() !== '' ? (
              <div
                className="text-2xl"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(skill.icon) }}
              />
            ) : (
              <FaCode className="text-2xl text-gray-800" />
            )}
          
          </div>

          <p className="font-bold text-gray-900 text-lg mb-2">{skill.name}</p>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div 
              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.proficiency || 85}%` }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>

          <p className="text-sm text-gray-600 mt-2">{skill.proficiency || 85}% Proficiency</p>
        </motion.div>
      ))}
    </div>
  </SectionContainer>
);
export default SkillsGrid
// export default SkillsGrid;
// import React from 'react';
// import { motion } from 'framer-motion';
// import DOMPurify from 'dompurify';
// import SectionContainer from '../common/SectionContainer';
// import { FaCode } from 'react-icons/fa';

// const SkillsGrid = ({ skills }) => {
//   const categoryColors = {
//     Backend: 'from-blue-500 to-cyan-500',
//     Frontend: 'from-pink-500 to-rose-500',
//     Database: 'from-green-500 to-emerald-500',
//     DevOps: 'from-yellow-500 to-orange-500',
//     default: 'from-white to-white', // ✅ Default white background
//   };

//   return (
//     console.log('Skills Data:', skills),
//     <SectionContainer 
//       title="Technical Competencies" 
//       subtitle="Advanced skills aligned with industry demands" 
//       icon={FaCode}
//     >
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//         {skills.map(skill => (
//           <motion.div 
//             key={skill.id}
//             className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
//             whileHover={{ scale: 1.05 }}
//           >
//             <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gray-200 group-hover:bg-gray-50 transition-all">
            
//             {/* ✅ Render Font Awesome icon safely (keeps white color) */}
//             {skill.icon && skill.icon.trim() !== '' ? (
//               <div
//                 className="text-2xl"
//                 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(skill.icon) }}
//               />
//             ) : (
//               <FaCode className="text-2xl text-gray-800" />
//             )}
//           </div>
//             <p className="font-bold text-gray-900 text-lg mb-2">{skill.name}</p>

//             <div className="w-full bg-gray-200 rounded-full h-2">
//               <motion.div 
//                 className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
//                 initial={{ width: 0 }}
//                 whileInView={{ width: `${skill.proficiency || 85}%` }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1, delay: 0.2 }}
//               />
//             </div>

//             <p className="text-sm text-gray-600 mt-2">
//               {skill.proficiency || 85}% Proficiency
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </SectionContainer>
//   );
// };

// export default SkillsGrid;
