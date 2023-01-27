import React from 'react';
import { RadialBarChart, RadialBar } from "recharts";

/**
 * Graphical component of the Score component
 * @param data {Array<Object>} Previously referenced in the parent component
 * @returns {JSX.Element}
 * @constructor
 */
export default function ScoreChart({ data }) {
    return (
        <RadialBarChart
            width={200}
            height={190}
            cx="50%"
            cy="50%"
            innerRadius="90%"
            outerRadius="100%"
            data={data}
            startAngle={180}
            endAngle={-180}
        >
            <RadialBar
                minAngle={15}
                barSize={10}
                cornerRadius={25}
                background={false}
                dataKey='value'
            />
            <circle cx="50%" cy="50%" fill="white" r="80"></circle>
        </RadialBarChart>
    )
}