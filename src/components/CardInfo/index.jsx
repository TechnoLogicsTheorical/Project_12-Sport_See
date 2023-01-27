import React from 'react';

import Card from '../CardContainer/index.jsx';
import styled from 'styled-components';

const RoundedContainer = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
  
    background-color: ${props => props.color + '12'};
    border-radius: 5px;
    width: 60px;
    height: 60px;
`;

const Image = styled.img``;

const ValueContainer = styled.div`
    margin-left: 24px;
`;
const TextValue = styled.p`
    font-size: 20px;
    font-weight: 700;
    color: #282D30;
`;
const TextCategory = styled.p`
    font-size: 14px;
    color: var(--gray-color);
`;

export default function CardInfo({ value, valueExtension, category, color, icon }) {
    return (
        <Card
            color={'var(--sec-gray-color)'}
            sizes={{ w: 258, h: 'auto' }}
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: 32
            }}
        >
            <RoundedContainer color={color}>
                <Image src={icon} alt={'Icone de la catégorie'}/>
            </RoundedContainer>

            <ValueContainer>
                <TextValue>{value + valueExtension}</TextValue>
                <TextCategory>{category}</TextCategory>
            </ValueContainer>
        </Card>
    )
}