import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

function formatDimension(size) {
    if (size && typeof size === 'number') {
        return `${size}px`;
    } else {
        return size;
    }
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: ${(props) => formatDimension(props.sizes.h)};
    width: ${(props) => formatDimension(props.sizes.w)};

    border-radius: 5px;
    background-color: ${(props) => props.color};
`;

/**
 A component designed to display a piece of display for displaying graphic data or user information
 @param style {object} CSS declaration object
 @param children {JSX.Element} Child elements containing HTML tags
 @param id {string} String identifier for additional functions
 @param sizes {object} Properties object containing (h = height, w = width)
 @param color {string} String concerning the background color
 @returns {JSX.Element} Returns generated elements with information
 @constructor
 */
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

Card.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
    sizes: PropTypes.object.isRequired,
    color: PropTypes.string.isRequired,
}