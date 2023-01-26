import React from 'react';
import styled from 'styled-components';

import Card from '../../CardContainer/index.jsx';
import ScoreChart from './chart.jsx';


const Title = styled.h3`
    font-size: 15px;
    line-height: 24px;
    color: #20253A;
`;

const DisplayScorePercentage = styled.div`
    position: absolute;
    top: 55%;
    left: 50%;
  
    transform: translate(-50%, -50%);
    z-index: 99;
  
    width: 95px;
    height: 70px;
  
    text-align: center;
    font-size: 16px;
    color: var(--gray-color);
    //background-color: darkred;
`;

const ScorePercent = styled.div`
    font-size: 26px;
    font-weight: bold;
    color: black;
`;

export default function Score({ data }) {
    return (
        <Card sizes={{ h: 264, w: 258 }} style={{position: 'relative', padding: 30,}}>
            <Title>Score</Title>
            <ScoreChart data={data.data} />
            <DisplayScorePercentage>
                <ScorePercent>{data.valueInPercent}%</ScorePercent>
                de votre objectif
            </DisplayScorePercentage>
        </Card>
    )
}