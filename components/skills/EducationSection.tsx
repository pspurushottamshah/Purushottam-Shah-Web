'use client';

import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolio.json';

export default function EducationSection() {
    const { education } = portfolioData;

    return (
        <section className="section-container border-t border-gray-800/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="gradient-text">Education</span>
                </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass p-6 rounded-2xl hover:bg-white/5 transition-smooth relative overflow-hidden group"
                    >
                        {/* Decorative Line on Hover */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-electric scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"></div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-electric transition-colors">
                                    {edu.institution}
                                </h3>
                                <p className="text-gray-300 font-medium mb-1">{edu.degree}</p>
                                {edu.activities && (
                                    <p className="text-sm text-gray-500 mt-2 italic">{edu.activities}</p>
                                )}
                            </div>
                            <div className="text-right md:text-right">
                                <div className="text-electric font-semibold text-sm mb-1">{edu.date}</div>
                                {edu.grade && (
                                    <div className="text-sm text-gray-400">
                                        Grade: <span className="text-gray-300 ml-1">{edu.grade}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
