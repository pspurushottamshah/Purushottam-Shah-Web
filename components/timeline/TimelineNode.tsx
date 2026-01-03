'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { CareerMilestone } from '@/types/portfolio';



interface TimelineNodeProps {
    milestone: CareerMilestone;
    index: number;
    isLast: boolean;
}

export default function TimelineNode({ milestone, index, isLast }: TimelineNodeProps) {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const getCategoryColor = (category: string) => {
        const colors = {
            engineering: 'from-orange-500 to-red-500',
            business: 'from-blue-500 to-purple-500',
            leadership: 'from-electric to-cyan-500',
            education: 'from-green-500 to-emerald-500',
        };
        return colors[category as keyof typeof colors] || 'from-electric to-blue-500';
    };

    const getCategoryIcon = (category: string) => {
        const icons = {
            engineering: '⚡',
            business: '📊',
            leadership: '🎯',
            education: '🎓',
        };
        return icons[category as keyof typeof icons] || '🚀';
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
        >
            <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className="flex-1">
                    <div className="glass rounded-2xl p-6 hover-glow transition-smooth hover:scale-105">
                        {/* Phase Badge */}
                        <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${getCategoryColor(milestone.category)} text-white text-sm font-semibold mb-3`}>
                            {getCategoryIcon(milestone.category)} {milestone.phase}
                        </div>

                        {/* Year */}
                        <div className="text-electric font-bold text-lg mb-2">{milestone.year}</div>

                        {/* Role and Company */}
                        <h3 className="text-2xl font-bold text-white mb-2">{milestone.role}</h3>
                        <p className="text-gray-400 mb-3">
                            {milestone.companies.join(', ')} • {milestone.location}
                        </p>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed mb-4">{milestone.description}</p>

                        {/* Key Achievements */}
                        <div className="mb-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                            <ul className="space-y-1">
                                {milestone.keyAchievements.slice(0, 3).map((achievement, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                        <span className="text-electric mt-0.5">•</span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                            {milestone.skills.slice(0, 4).map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 bg-charcoal-800 text-gray-300 text-xs rounded border border-gray-700"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Timeline Line */}
                <div className="hidden md:flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${getCategoryColor(milestone.category)} flex items-center justify-center text-3xl shadow-lg shadow-electric/30`}>
                        {getCategoryIcon(milestone.category)}
                    </div>
                    {!isLast && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={inView ? { height: '100%' } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                            className="w-1 flex-1 min-h-[100px] bg-gradient-to-b from-electric to-transparent mt-4"
                        />
                    )}
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
            </div>
        </motion.div>
    );
}
