import React from 'react';
import SectionContainer from '../common/SectionContainer';
import MetricCard from '../common/MetricCard';
import { FaChartLine, FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa';

const ImpactMetrics = () => (
  <SectionContainer title="Measurable Impact" subtitle="Quantifiable results that demonstrate value and expertise" icon={FaChartLine}>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      <MetricCard number="40%" label="Cost Reduction" icon={FaChartLine} />
      <MetricCard number="15+" label="Projects Delivered" icon={FaBriefcase} />
      <MetricCard number="2" label="Research Papers" icon={FaGraduationCap} />
      <MetricCard number="99.9%" label="System Uptime" icon={FaAward} />
    </div>
  </SectionContainer>
);

export default ImpactMetrics;