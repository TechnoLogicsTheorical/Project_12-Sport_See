import React from 'react';

import styled from 'styled-components';
import DailyActivityChart from './chart.jsx';

const DailyContainer = styled.div`
    padding: 25px;
    background-color: #FBFBFB;
`;
const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 35px;
`;

// Header styles
const HeaderTitle = styled.h3`
    font-size: 15px;
    font-weight: 500;
`;

// Legends Stylzing
const LegendsContainer = styled.div``;

const LegendTitle = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: var(--gray-color);
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    margin-left: 32px;
`;

const RoundedDotLegend = styled.div`
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: ${props => props.color || 'black'};
    margin-right: 10px;
`;

export default function DailyActivity({ data }) {
    return (
        <DailyContainer>
            <HeaderContainer>
                <HeaderTitle>Activité quotidienne</HeaderTitle>

                <LegendsContainer>
                    <LegendTitle>
                        <RoundedDotLegend />Poids (kg)
                    </LegendTitle>

                    <LegendTitle>
                        <RoundedDotLegend color='var(--red-color)' />Calories brûlées (kCal)
                    </LegendTitle>
                </LegendsContainer>
            </HeaderContainer>

            <DailyActivityChart data={data} />
        </DailyContainer>
    )
}