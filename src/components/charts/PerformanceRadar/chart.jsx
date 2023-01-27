import React from 'react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart,  } from "recharts";
import { ResponsiveContainer } from 'recharts';

/**
 * Graphical component of the Score component
 * @param data {Array<Object>} Previously referenced in the parent component
 * @returns {JSX.Element}
 * @constructor
 */
export default function PerformanceRadarChart({ data }) {
    return (
        <ResponsiveContainer width='100%' height='100%'>
            <RadarChart data={data} outerRadius={80} >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis
                    dataKey='category'
                    tickLine={false}
                    tick={{ fontSize: 12, fontWeight: 500 }}
                    stroke="#FFFFFF"
                />
                <Radar dataKey='value' fill="#FF0101B2"/>
            </RadarChart>
        </ResponsiveContainer>
    )
}