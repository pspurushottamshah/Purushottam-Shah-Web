'use client';

import ProjectCard from './ProjectCard';
import portfolioData from '@/data/portfolio.json';
import type { Project } from '@/types/portfolio';

export default function ProjectGrid() {
    const { projects } = portfolioData as unknown as { projects: Project[] };
    return (
        <section id="projects" className="section-container">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="gradient-text">Project Deep-Dive</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Enterprise transformations delivered with precision, leadership, and measurable impact
                </p>
            </div>

            {/* Unified Project Grid (Bento Layout) */}
            <div className="grid md:grid-cols-4 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        variant={project.featured ? 'featured' : 'compact'}
                    />
                ))}
            </div>
        </section>
    );
}
