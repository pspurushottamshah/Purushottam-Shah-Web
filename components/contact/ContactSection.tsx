'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import portfolioData from '@/data/portfolio.json';

export default function ContactSection() {
    const { personalInfo } = portfolioData;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission (can integrate with email service)
        alert('Thank you for your message! This is a demo - implement your email service here.');
    };

    return (
        <section id="contact" className="section-container">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="gradient-text">One-Click Discovery</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Let's discuss how I can drive transformation in your organization
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="glass rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>

                        <div className="space-y-4">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="flex items-center gap-4 p-4 bg-charcoal-800 rounded-lg hover:bg-charcoal-700 transition-smooth group"
                            >
                                <div className="w-12 h-12 rounded-full bg-electric/20 flex items-center justify-center group-hover:bg-electric/30 transition-smooth">
                                    <span className="text-2xl">📧</span>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400">Email</div>
                                    <div className="text-white font-medium">{personalInfo.email}</div>
                                </div>
                            </a>

                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 bg-charcoal-800 rounded-lg hover:bg-charcoal-700 transition-smooth group"
                            >
                                <div className="w-12 h-12 rounded-full bg-electric/20 flex items-center justify-center group-hover:bg-electric/30 transition-smooth">
                                    <span className="text-2xl">💼</span>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400">LinkedIn</div>
                                    <div className="text-white font-medium">Connect with me</div>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-4 bg-charcoal-800 rounded-lg">
                                <div className="w-12 h-12 rounded-full bg-electric/20 flex items-center justify-center">
                                    <span className="text-2xl">📍</span>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400">Location</div>
                                    <div className="text-white font-medium">{personalInfo.location}</div>
                                </div>
                            </div>
                        </div>

                        {/* Calendly Link */}
                        <a
                            href={personalInfo.calendly}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mt-6 w-full py-4 bg-electric hover:bg-electric-600 text-white font-semibold rounded-lg transition-smooth text-center hover-glow"
                        >
                            📅 Schedule a Meeting
                        </a>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass rounded-2xl p-8"
                >
                    <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 bg-charcoal-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-electric transition-smooth"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 bg-charcoal-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-electric transition-smooth"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Message
                            </label>
                            <textarea
                                required
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 bg-charcoal-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-electric transition-smooth resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-gradient-to-r from-electric to-cyan-500 hover:from-electric-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-smooth hover-glow"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
