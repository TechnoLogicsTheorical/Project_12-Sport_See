import React from 'react';

import Card from '../../CardContainer/index.jsx';
import AverageSessionsChart from './chart.jsx';

import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h3`
    color: #FFFFFF80;
    margin: 30px auto 0 35px;
    font-size: 15px;
    width: 147px;
`;

/**
 * Average Session component for the Graphic section
 * @param data {Array<Object>} Formatted data from the UserDataModel.getAverageSessions() class
 * @returns {JSX.Element}
 * @constructor
 */
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

AverageSessions.propTypes = {
    data: PropTypes.shape({
        data: PropTypes.array.isRequired
    }).isRequired
}