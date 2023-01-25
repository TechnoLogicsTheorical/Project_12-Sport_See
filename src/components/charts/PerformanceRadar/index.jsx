import React from 'react';
import styled from 'styled-components';
import PerformanceRadarChart from './chart.jsx';

const Card = styled.div`
    border-radius: 5px;
    background-color: #282D30;
    height: 264px;
    max-width: 258px;
    display: flex;
    flex-direction: column;
`;

export default function PerformanceRadar({ data }) {
    return (
        <Card>
            <PerformanceRadarChart data={data.data} />
        </Card>
    )
}