import React from 'react';
import { motion } from 'framer-motion';

const SectionContainer = ({ children, title, icon: Icon, subtitle }) => (
  <motion.section 
    className="mb-16"
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <div className="text-center mb-10">
      {Icon && <Icon className="mx-auto text-4xl text-indigo-600 mb-4" />}
      <h2 className="text-4xl font-bold text-gray-900 mb-3">{title}</h2>
      {subtitle && <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
    {children}
  </motion.section>
);

export default SectionContainer;