'use client';

import portfolioData from '@/data/portfolio.json';

export default function Footer() {
    const { personalInfo } = portfolioData;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-charcoal-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold gradient-text mb-3">
                            {personalInfo.name}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {personalInfo.tagline}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-3">Quick Links</h4>
                        <div className="space-y-2">
                            <a href="#projects" className="block text-gray-400 hover:text-electric transition-smooth text-sm">
                                Projects
                            </a>
                            <a href="#timeline" className="block text-gray-400 hover:text-electric transition-smooth text-sm">
                                Career Journey
                            </a>
                            <a href="#skills" className="block text-gray-400 hover:text-electric transition-smooth text-sm">
                                Skills & Expertise
                            </a>
                            <a href="#certifications" className="block text-gray-400 hover:text-electric transition-smooth text-sm">
                                Certifications
                            </a>
                        </div>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-white font-semibold mb-3">Connect</h4>
                        <div className="space-y-2">
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-gray-400 hover:text-electric transition-smooth text-sm"
                            >
                                LinkedIn
                            </a>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="block text-gray-400 hover:text-electric transition-smooth text-sm"
                            >
                                Email
                            </a>
                            <a
                                href={personalInfo.meetingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-gray-400 hover:text-electric transition-smooth text-sm"
                            >
                                Schedule Meeting
                            </a>
                        </div>
                    </div>

                    {/* Address / Location */}
                    <div>
                        <h4 className="text-white font-semibold mb-3">Locations</h4>
                        <div className="space-y-4">
                            {personalInfo.location.split(';').map((loc, index) => (
                                <div key={index} className="flex items-start gap-3 text-gray-400 group">
                                    <svg className="w-5 h-5 text-electric mt-0.5 shrink-0 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-sm group-hover:text-white transition-colors">{loc.trim()}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} {personalInfo.name}. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-xs">
                        Built with Next.js, Tailwind CSS, and Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
}
