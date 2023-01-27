import React from 'react';
import { CartesianGrid, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

import styled from 'styled-components';

const TooltipContainer = styled.div`
    background-color: white;
    padding: 0 7px;
`;

const TooltipElement = styled.p`
    line-height: 24px;
`;

function CustomTooltip({ payload, active }) {
    if(active){
        return (
            <TooltipContainer>
                <TooltipElement>{`${payload[0].value}`}min</TooltipElement>
            </TooltipContainer>
        )
    }
    return null
}

function customMouseMove(e) {
    let sessionWrap = document.querySelector('#sessionDurationWrap');

    if (e.isTooltipActive) {
        let windowWidth = sessionWrap.offsetWidth;
        let mouseXpercent = Math.floor(
            (e.activeCoordinate.x / windowWidth) * 100
        );

        sessionWrap.style.background = `linear-gradient(90deg, rgba(255,0,0, 1) ${mouseXpercent}%, rgba(230,0,0,1) ${mouseXpercent}%, rgba(230,0,0,1) 100%)`;
    }
    else {
        sessionWrap.style.background = '#FF0101'
    }
}

function customOnMouseOut() {
    let sessionWrap = document.querySelector('#sessionDurationWrap');
    sessionWrap.style.background = '#FF0101';
}

/**
 * Graphical component of the Score component
 * @param data {Array<Object>} Previously referenced in the parent component
 * @returns {JSX.Element}
 * @constructor
 */
export default function AverageSessionsChart({ data }) {
    return (
        <LineChart
            width={258}
            height={200}
            data={data}
            margin={{
                top: 5,
                right: 8,
                left: 8,
                bottom: 40,
            }}
            onMouseMove={(e) => customMouseMove(e)}
            onMouseOut={() => customOnMouseOut()}
        >
            <CartesianGrid horizontal={false} vertical={false} />
            <XAxis
                dataKey="day"
                type="category"
                axisLine={false}
                tickLine={false}
                tickMargin={40}
                stroke="#FFFFFF80"
            />
            <YAxis hide='true' domain={['dataMin', 'dataMax']} />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Line
                dataKey="sessionLength"
                type="natural"
                dot={false}
                stroke="#FFFFFF"
                strokeWidth={2}
            />
        </LineChart>
    )
}