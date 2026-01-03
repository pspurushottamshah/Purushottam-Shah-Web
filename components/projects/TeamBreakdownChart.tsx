'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import type { TeamBreakdown } from '@/types/portfolio';



interface TeamBreakdownChartProps {
    teamBreakdown: TeamBreakdown;
}

export default function TeamBreakdownChart({ teamBreakdown }: TeamBreakdownChartProps) {
    const data = [
        { name: 'Developers', value: teamBreakdown.developers, color: '#007BFF' },
        { name: 'Quality Assurance', value: teamBreakdown.qualityAssurance, color: '#00d4ff' },
        { name: 'Consultants', value: teamBreakdown.consultants, color: '#0062cc' },
        { name: 'Business Analysts', value: teamBreakdown.businessAnalysts, color: '#004a99' },
    ];

    return (
        <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#1a1a1a',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '8px',
                            color: '#fff',
                        }}
                    />
                    <Legend
                        verticalAlign="bottom"
                        height={36}
                        iconType="circle"
                        wrapperStyle={{ color: '#fff', fontSize: '12px' }}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
