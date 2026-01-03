'use client';

import TimelineNode from './TimelineNode';
import portfolioData from '@/data/portfolio.json';

export default function CareerTimeline() {
    const { careerTimeline } = portfolioData;

    return (
        <section id="timeline" className="section-container bg-charcoal-900/30">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="gradient-text">Career Sprint Timeline</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    From Electrical Engineer in Kathmandu to Transformation Lead in Australia
                </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-8">
                {careerTimeline.map((milestone, index) => (
                    <TimelineNode
                        key={milestone.id}
                        milestone={milestone}
                        index={index}
                        isLast={index === careerTimeline.length - 1}
                    />
                ))}
            </div>
        </section>
    );
}
