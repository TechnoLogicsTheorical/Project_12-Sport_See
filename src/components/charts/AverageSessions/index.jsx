import React from 'react';

import Card from '../../CardContainer/index.jsx';
import AverageSessionsChart from './chart.jsx';

import styled from 'styled-components';

const Title = styled.h3`
    color: #FFFFFF80;
    margin: 30px auto 0 35px;
    font-size: 15px;
    width: 147px;
`;

export default function AverageSessions({ data }) {
    return (
        <Card
            id="sessionDurationWrap"
            sizes={{ h: 264, w: 258 }}
            color={'var(--red-color)'}
        >
            <Title>Durée moyenne des sessions</Title>
            <AverageSessionsChart data={data.data} />
        </Card>
    )
}