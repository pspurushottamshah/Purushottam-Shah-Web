'use client';

import CountUp from '../ui/CountUp';
import portfolioData from '@/data/portfolio.json';

export default function GlobalImpactTicker() {
    const { globalMetrics } = portfolioData;

    const metrics = [
        {
            value: globalMetrics.budgetManaged / 1000000,
            prefix: '£',
            suffix: 'M+',
            label: 'Budget Managed',
            description: 'Total enterprise project value delivered',
            decimals: 1,
        },
        {
            value: globalMetrics.projectCount,
            suffix: '+',
            label: 'Enterprise Projects',
            description: 'Successfully delivered transformations',
        },
        {
            value: globalMetrics.stakeholderCount,
            suffix: '+',
            label: 'Global Stakeholders',
            description: 'Coordinated across regions',
        },
        {
            value: globalMetrics.maxTeamSize,
            label: 'Max Team Size',
            description: 'Cross-functional experts managed',
        },
    ];

    return (
        <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {metrics.map((metric, index) => (
                    <div
                        key={index}
                        className="glass rounded-xl p-6 hover-glow transition-smooth hover:scale-105"
                    >
                        <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                            <CountUp
                                end={metric.value}
                                prefix={metric.prefix || ''}
                                suffix={metric.suffix || ''}
                                decimals={metric.decimals}
                            />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                            {metric.label}
                        </h3>
                        <p className="text-sm text-gray-400">
                            {metric.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
