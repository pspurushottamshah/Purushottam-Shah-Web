'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import TeamBreakdownChart from './TeamBreakdownChart';
import type { Project } from '@/types/portfolio';



interface ProjectCardProps {
    project: Project;
    index: number;
    variant?: 'featured' | 'compact';
}

export default function ProjectCard({ project, index, variant = 'compact' }: ProjectCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const isFeatured = variant === 'featured';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`glass rounded-2xl p-6 hover-glow transition-smooth flex flex-col h-full ${isFeatured ? 'md:col-span-2 md:row-span-2' : ''
                }`}
        >
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    {isFeatured && (
                        <span className="inline-block px-3 py-1 bg-electric/20 text-electric text-xs font-semibold rounded-full mb-2">
                            FLAGSHIP PROJECT
                        </span>
                    )}
                    <h3 className={`font-bold text-white mb-2 ${isFeatured ? 'text-2xl' : 'text-xl'}`}>
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                        {project.company} • {project.location}
                    </p>
                </div>
                {isFeatured && (
                    <div className="text-right">
                        <div className="text-3xl font-bold gradient-text">
                            {project.currency === 'GBP' ? '£' : '$'}
                            {(project.budget / 1000000).toFixed(1)}M
                        </div>
                        <div className="text-xs text-gray-400">{project.duration}</div>
                    </div>
                )}
            </div>

            {/* Description */}
            <p className={`text-gray-300 mb-4 leading-relaxed ${!isFeatured ? 'line-clamp-3 text-sm flex-grow' : ''}`}>
                {project.description}
            </p>

            {/* Featured Only Content */}
            {isFeatured && (
                <>
                    {/* Team Size */}
                    <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 bg-electric rounded-full"></div>
                            <span className="text-sm font-semibold text-white">
                                Team: {project.teamSize} Cross-functional Experts
                            </span>
                        </div>
                    </div>

                    {/* Team Breakdown Chart */}
                    {project.teamBreakdown && (
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold text-white mb-3">Team Composition</h4>
                            <TeamBreakdownChart teamBreakdown={project.teamBreakdown} />
                        </div>
                    )}

                    {/* ROI Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        {Object.entries(project.roiMetrics).map(([key, value]) => (
                            <div key={key} className="bg-charcoal-800 rounded-lg p-3">
                                <div className="text-2xl font-bold text-electric mb-1">{value}</div>
                                <div className="text-xs text-gray-400 capitalize">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* Technologies */}
            <div className="mt-auto">
                <h4 className="text-sm font-semibold text-white mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, (isExpanded || isFeatured) ? undefined : 3).map((tech, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 bg-electric/10 text-electric text-xs rounded-full border border-electric/20"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && !isExpanded && !isFeatured && (
                        <span className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">
                            +{project.technologies.length - 3}
                        </span>
                    )}
                </div>
            </div>

            {/* Expandable Details (Only for Featured or if user clicks expand on compact - optional) */}
            {isExpanded && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-gray-700 pt-4 mt-4"
                >
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                        {project.keyAchievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-300">
                                <span className="text-electric mt-1">✓</span>
                                <span>{achievement}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}

            {/* Expand Button */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 w-full py-2 bg-electric/10 hover:bg-electric/20 text-electric font-semibold rounded-lg transition-smooth text-sm"
            >
                {isExpanded ? 'Show Less' : 'View Details'}
            </button>
        </motion.div>
    );
}
