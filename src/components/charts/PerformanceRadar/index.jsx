import React from 'react';

import Card from '../../CardContainer/index.jsx';
import PerformanceRadarChart from './chart.jsx';
import PropTypes from 'prop-types';

/**
 * Performance component for the Graphic section
 * @param data {Array<Object>} Formatted data from the UserDataModel.getPerformance() class
 * @returns {JSX.Element}
 * @constructor
 */
export default function PerformanceRadar({ data }) {
    return (
        <Card
            sizes={{ h: 264, w: 258 }}
            color={'#282D30'}
        >
            <PerformanceRadarChart data={data.data} />
        </Card>
    )
}

PerformanceRadar.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        data: PropTypes.array.isRequired
    })).isRequired
}