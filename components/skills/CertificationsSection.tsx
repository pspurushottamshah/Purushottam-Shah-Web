'use client';

import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolio.json';

interface Certification {
    name: string;
    issuer: string;
    date: string;
    featured: boolean;
    award?: boolean;
    verificationUrl?: string;
}

export default function CertificationsSection() {
    const certifications = portfolioData.certifications as Certification[];
    const featuredCerts = certifications.filter(c => c.featured);

    return (
        <section id="certifications" className="section-container bg-charcoal-900/30">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="gradient-text">Credentials & Awards</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Academic excellence and professional certifications
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredCerts.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="glass rounded-2xl p-6 hover-glow transition-smooth hover:scale-105 text-center"
                    >
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-electric to-cyan-500 flex items-center justify-center text-3xl">
                            {cert.award ? '🏆' : '🎓'}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                        <p className="text-sm text-gray-400 mb-2">{cert.issuer}</p>
                        <p className="text-xs text-electric font-semibold">{cert.date}</p>
                        {cert.verificationUrl && (
                            <a
                                href={cert.verificationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-3 text-xs text-electric hover:text-cyan-400 transition-smooth"
                            >
                                Verify →
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>

        </section>
    );
}
