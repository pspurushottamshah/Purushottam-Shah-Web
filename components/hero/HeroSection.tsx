'use client';

import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolio.json';

export default function HeroSection() {
    const { personalInfo } = portfolioData;

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="section-container text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 rounded-full glass text-electric font-medium text-sm">
                            MBA & MPM
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-display">
                        <span className="gradient-text">{personalInfo.tagline}</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6">
                        Purushottam "Puru" Shah
                    </h2>

                    <div className="flex items-center justify-center gap-2 mb-8 text-gray-300">
                        <svg className="w-5 h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-lg">{personalInfo.location}</span>
                    </div>

                    <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
                        {personalInfo.subtitle}
                    </p>

                    <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
                        {personalInfo.bio}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-electric hover:bg-electric-600 text-white font-semibold rounded-lg transition-smooth hover:scale-105 hover-glow"
                        >
                            Let's Connect
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-4 glass hover:bg-white/10 text-white font-semibold rounded-lg transition-smooth hover:scale-105"
                        >
                            View My Work
                        </a>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{
                        opacity: { delay: 1.5, duration: 0.5 },
                        y: { repeat: Infinity, duration: 1.5 }
                    }}
                >
                    <div className="w-6 h-10 border-2 border-electric rounded-full flex justify-center">
                        <div className="w-1.5 h-3 bg-electric rounded-full mt-2"></div>
                    </div>
                </motion.div>
            </div>

            {/* Animated Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </section>
    );
}
