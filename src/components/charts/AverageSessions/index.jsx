import React from 'react';

import styled from 'styled-components';
import AverageSessionsChart from './chart.jsx';

const Card = styled.div`
    border-radius: 5px;
    background-color: var(--red-color);
    height: 264px;
    max-width: 258px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    color: #FFFFFF80;
    margin: 30px auto 0 35px;
    font-size: 15px;
    width: 147px;
`;

export default function AverageSessions({ data }) {
    return (
        <Card className="sessionDurationWrap">
            <Title>Durée moyenne des sessions</Title>
            <AverageSessionsChart data={data.data} />
        </Card>
    )
}