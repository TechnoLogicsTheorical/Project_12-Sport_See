import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import React from 'react';

import styled from 'styled-components';

const TooltipContainer = styled.div`
    background-color: #E60000;
    color: white;
    font-size: 9px;
  
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 12px 4px;
`;

const TooltipElement = styled.p`
    line-height: 24px;
`;


function CustomTooltipShape({ active, payload }) {
    if ( active ) {
        return (
            <TooltipContainer>
                <TooltipElement>{`${payload[0].value}kg`}</TooltipElement>
                <TooltipElement>{`${payload[1].value}Kcal`}</TooltipElement>
            </TooltipContainer>
        )
    }

    return null;
}

export default function DailyActivityChart({ data }) {
    return (
        <BarChart
            width={766}
            height={215}
            data={data.data}
            padding={{
                top: 10,
                right: 5,
                left: 5,
                bottom: 10,
            }}
        >
            <CartesianGrid
                vertical={false}
                strokeDasharray="3"
                height={1}
            />
            <XAxis
                dataKey="day"
                tickSize='0'
                tickMargin='15'
                stroke="#9B9EAC"
            />
            <YAxis
                dataKey="kilogram"
                yAxisId="kilogram"
                type="number"
                orientation="right"
                allowDecimals={false}
                domain={["dataMin - 1", "dataMax + 1"]}
                tickSize='0'
                tickMargin='40'
                stroke="#9B9EAC"
            />
            <YAxis
                dataKey="calories"
                yAxisId="calories"
                type="number"
                orientation="left"
                domain={[0, "dataMax+40"]}
                hide={true}
            />
            <Tooltip content={<CustomTooltipShape/>}/>
            <Bar
                yAxisId="kilogram"
                dataKey="kilogram"
                radius={[3.5, 3.5, 0,0]}
                barSize={7}
                fill="#282D30"
            />
            <Bar
                dataKey="calories"
                yAxisId="calories"
                radius={[3.5, 3.5, 0,0]}
                barSize={7}
                fill="#E60000"
            />
        </BarChart>
    )
}