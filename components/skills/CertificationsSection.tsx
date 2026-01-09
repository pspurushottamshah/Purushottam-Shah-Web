'use client';

import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolio.json';

interface Certification {
    name: string;
    issuer: string;
    date: string;
    featured?: boolean;
    award?: boolean;
    verificationUrl?: string;
}

interface Education {
    institution: string;
    degree: string;
    date: string;
    location: string;
    activities?: string;
}

export default function CertificationsSection() {
    const { certifications, education } = portfolioData;

    // Feature strict list of certifications by name
    const featuredCertifications = [
        "Learning Microsoft Dynamics 365: The Basics",
        "Agile Software Development",
        "Project Risk Management",
        "Communication in Difficult Situation",
        "Positioning the 'I' in Leadership"
    ];

    const displayCertifications = certifications.filter(c => featuredCertifications.includes(c.name));

    return (
        <section id="certifications" className="section-container">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="gradient-text">Credentials & Education</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Academic excellence and professional certifications
                </p>
            </div>

            {/* Certifications Grid */}
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
                {displayCertifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass p-6 rounded-2xl hover:bg-white/5 transition-smooth text-center group h-full flex flex-col items-center"
                    >
                        <div className="w-12 h-12 rounded-full bg-electric/20 flex items-center justify-center text-electric mb-4 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 1 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-white mb-2 text-sm leading-tight h-10 flex items-center justify-center w-full">
                            {cert.name}
                        </h3>
                        <p className="text-gray-400 text-xs mb-1">{cert.issuer}</p>
                        <p className="text-electric text-xs font-semibold mt-auto">{cert.date}</p>
                    </motion.div>
                ))}
            </div>

            {/* Education List */}
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex items-center gap-4 mb-8">
                    <h3 className="text-2xl font-bold text-white">Education</h3>
                    <div className="h-px bg-gray-800 flex-grow"></div>
                </div>

                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass p-6 rounded-2xl hover:bg-white/5 transition-smooth relative overflow-hidden group"
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-electric scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"></div>

                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                            {/* University Icon/Logo Placeholder */}
                            <div className="w-16 h-16 rounded-xl bg-charcoal-800 flex items-center justify-center flex-shrink-0 border border-white/5">
                                <svg className="w-8 h-8 text-gray-400 group-hover:text-electric transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>

                            <div className="flex-grow">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-electric transition-colors">
                                        {edu.institution}
                                    </h3>
                                    <span className="text-electric font-semibold text-sm bg-electric/10 px-3 py-1 rounded-full whitespace-nowrap">
                                        {edu.date}
                                    </span>
                                </div>
                                <p className="text-gray-300 font-medium mt-1">{edu.degree}</p>
                                {edu.activities && (
                                    <p className="text-sm text-gray-500 mt-2 italic flex items-center gap-2">
                                        <svg className="w-4 h-4 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        {edu.activities}
                                    </p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
