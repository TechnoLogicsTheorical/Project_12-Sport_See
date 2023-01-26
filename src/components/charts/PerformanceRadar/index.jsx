import React from 'react';

import Card from '../../CardContainer/index.jsx';
import PerformanceRadarChart from './chart.jsx';

export default function PerformanceRadar({ data }) {
    return (
        <Card
            sizes={{ h: 264, w: 258 }}
            color={'#282D30'}
        >
            <PerformanceRadarChart data={data.data} />
        </Card>
    )
}