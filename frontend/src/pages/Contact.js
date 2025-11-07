import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import SectionContainer from '../components/common/SectionContainer';
import { FaEnvelope, FaBriefcase, FaGraduationCap, FaUsers } from 'react-icons/fa';
import { API } from '../api';


const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await axios.post(`${API}/contact-messages/`, form);
            setSent(true);
        } catch (error) {
            console.error("Contact form error:", error);
            alert("Failed to send message. Please try again or email me directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <SectionContainer 
                title="Get In Touch" 
                subtitle="Let's discuss opportunities for collaboration, research, or innovation"
                icon={FaEnvelope}
            >
                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-8 rounded-3xl shadow-2xl"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Why Connect?</h3>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-white/20 p-3 rounded-2xl">
                                    <FaBriefcase className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Career Opportunities</h4>
                                    <p className="text-indigo-100">Discuss roles where I can drive innovation and deliver measurable results.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-white/20 p-3 rounded-2xl">
                                    <FaGraduationCap className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Research Collaboration</h4>
                                    <p className="text-indigo-100">Explore academic partnerships and cutting-edge research projects.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-white/20 p-3 rounded-2xl">
                                    <FaUsers className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Strategic Consulting</h4>
                                    <p className="text-indigo-100">Leverage expertise for your organization's technical challenges.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-200"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                    >
                        {sent ? (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <FaEnvelope className="text-3xl text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                                <p className="text-gray-600 mb-8">
                                    Thank you for reaching out. I'll respond within 24 hours to discuss next steps.
                                </p>
                                <button 
                                    onClick={() => setSent(false)}
                                    className="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-indigo-700 transition-colors"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                                        <input 
                                            type="text" 
                                            name="name"
                                            placeholder="Enter your full name"
                                            onChange={e => setForm({ ...form, name: e.target.value })}
                                            className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                                        <input 
                                            type="email" 
                                            name="email"
                                            placeholder="your.email@company.com"
                                            onChange={e => setForm({ ...form, email: e.target.value })}
                                            className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Inquiry Type</label>
                                    <select 
                                        name="subject"
                                        onChange={e => setForm({ ...form, subject: e.target.value })}
                                        className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                        required
                                    >
                                        <option value="">Select purpose of contact</option>
                                        <option value="HR_Inquiry">Career Opportunity</option>
                                        <option value="Academic_Research">Research Collaboration</option>
                                        <option value="Technical_Consulting">Technical Consulting</option>
                                        <option value="General">General Inquiry</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Message</label>
                                    <textarea 
                                        name="message"
                                        placeholder="Describe your project, opportunity, or how we can collaborate..."
                                        rows="6"
                                        onChange={e => setForm({ ...form, message: e.target.value })}
                                        className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                                            Sending Message...
                                        </div>
                                    ) : (
                                        "Send Professional Inquiry"
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </SectionContainer>
        </div>
    );
};


export default Contact;