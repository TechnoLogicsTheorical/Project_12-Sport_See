import React from 'react';
import styled from 'styled-components';
import ScoreChart from './chart.jsx';

const Card = styled.div`
    position: relative;
    
    display: flex;
    flex-direction: column;
    
    border-radius: 5px;
    background-color: var(--sec-gray-color);
    height: 264px;
    max-width: 258px;
    
    padding: 30px;
`;

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
        <Card>
            <Title>Score</Title>
            <ScoreChart data={data.data} />
            <DisplayScorePercentage>
                <ScorePercent>{data.valueInPercent}%</ScorePercent>
                de votre objectif
            </DisplayScorePercentage>
        </Card>
    )
}