import React from 'react';
import { motion } from 'framer-motion';

const MetricCard = ({ number, label, icon: Icon }) => (
  <motion.div 
    className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
    whileHover={{ scale: 1.05, y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className="mx-auto text-3xl text-indigo-600 mb-3" />
    <div className="text-3xl font-bold text-gray-900 mb-1">{number}</div>
    <div className="text-gray-600 font-medium">{label}</div>
  </motion.div>
);

export default MetricCard;