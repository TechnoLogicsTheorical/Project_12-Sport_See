import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React from 'react';

export default function DailyActivityChart({data}) {
    return (
        <BarChart
            width={835}
            height={320}
            data={data.data}
            padding={{
                top: 5,
                right: 5,
                left: 5,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
                dataKey="day"
            />
            <YAxis
                dataKey="kilogram"
                type={"number"}
                orientation={"right"}
                allowDecimals={false}
                domain={[data.minKg - 1, data.maxKg + 1]}
            />
            <Tooltip />
            <Bar dataKey="kilogram" fill="black" />
            <Bar dataKey="calories" fill="red" />
        </BarChart>
    )
}