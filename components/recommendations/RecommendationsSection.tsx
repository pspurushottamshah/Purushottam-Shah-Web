'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import portfolioData from '@/data/portfolio.json';
import type { Recommendation } from '@/types/portfolio';

export default function RecommendationsSection() {
    const { recommendations } = portfolioData as unknown as { recommendations: Recommendation[] };
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    // Add type safety check
    if (!recommendations || recommendations.length === 0) {
        return null; // Don't render if no recommendations exist
    }

    return (
        <section id="recommendations" className="section-container relative overflow-hidden">
            {/* Background embellishment */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    ref={ref}
                >
                    <span className="text-electric font-semibold tracking-wider text-sm uppercase mb-2 block">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Professional Endorsements</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Trusted by colleagues and partners to deliver excellence
                    </p>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {recommendations.map((rec, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass p-8 rounded-2xl relative group hover-glow transition-smooth"
                    >
                        {/* Quote Icon */}
                        <div className="absolute top-6 right-6 text-electric/20 text-6xl font-serif leading-none select-none group-hover:text-electric/30 transition-colors">
                            &rdquo;
                        </div>

                        <div className="relative z-10 h-full flex flex-col">
                            <p className="text-gray-300 italic mb-6 text-lg leading-relaxed flex-grow">
                                "{rec.text}"
                            </p>

                            <div className="pt-6 border-t border-gray-700/50">
                                <div className="font-bold text-white text-lg">{rec.name}</div>
                                <div className="text-electric text-sm font-medium">{rec.role}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <a
                    href="https://linkedin.com/in/purushottam-shah-73b06581"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-electric hover:text-white transition-colors text-sm font-semibold"
                >
                    View more on LinkedIn
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
