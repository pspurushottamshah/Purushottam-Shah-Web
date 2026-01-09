'use client';

import portfolioData from '@/data/portfolio.json';

export default function Footer() {
    const { personalInfo } = portfolioData;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-charcoal-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
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
