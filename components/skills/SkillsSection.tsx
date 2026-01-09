'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import portfolioData from '@/data/portfolio.json';

export default function SkillsSection() {
    const { skills } = portfolioData;
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <section id="skills" className="section-container" ref={ref}>
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="gradient-text">Technical Excellence</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    A unique blend of project management, business tools, and engineering expertise
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {skills.map((category, categoryIndex) => (
                    <motion.div
                        key={category.category}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                        className="glass rounded-2xl p-6"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">{category.category}</h3>
                        <div className="space-y-4">
                            {category.items.map((skill, skillIndex) => (
                                <div key={skillIndex}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-300 font-medium">{skill.name}</span>
                                        <span className="text-electric font-semibold">{skill.proficiency}%</span>
                                    </div>
                                    <div className="w-full bg-charcoal-800 rounded-full h-2 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={inView ? { width: `${skill.proficiency}%` } : {}}
                                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                                            className="h-full bg-gradient-to-r from-electric to-cyan-500 rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
