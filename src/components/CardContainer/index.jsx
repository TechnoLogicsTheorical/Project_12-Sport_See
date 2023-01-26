import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: ${(props) => props.sizes.h}px;
    width: ${(props) => props.sizes.w}px;

    border-radius: 5px;
    background-color: ${(props) => props.color};
`;

export default function Card(
    {
        style,
        children,
        id = null,
        sizes,
        color = 'var(--sec-gray-color)'
    }) {
    return (
        <CardContainer style={style} id={id} sizes={sizes} color={color}>
            {children}
        </CardContainer>
    )
}