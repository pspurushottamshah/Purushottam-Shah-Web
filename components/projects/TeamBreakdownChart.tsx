'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import type { TeamBreakdown } from '@/types/portfolio';

interface TeamBreakdownChartProps {
    teamBreakdown: TeamBreakdown;
}

export default function TeamBreakdownChart({ teamBreakdown }: TeamBreakdownChartProps) {
    // Generate data from dynamic keys
    const data = Object.entries(teamBreakdown).map(([name, value], index) => {
        // Formulate a display name from camelCase keys (e.g. "qualityAssurance" -> "Quality Assurance")
        const formattedName = name.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

        // Define a color palette
        const colors = ['#007BFF', '#00d4ff', '#0062cc', '#004a99', '#3399ff', '#66b3ff'];

        return {
            name: formattedName,
            value,
            color: colors[index % colors.length]
        };
    });

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
