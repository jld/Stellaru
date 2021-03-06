import React from 'react';

import Chart from '../Chart';
import LineChart from '../LineChart';
import {selectNested} from '../Util';
import {registerChart} from '../../ChartRegistry';

const Name = 'Leader Stats';

function LeaderStats(props) {
    const name = props.name ? props.name : 'leaderstats';
    const data = props.data;

    const lines = [
        {
            label: 'Average Age',
            selector: snap => selectNested('leaders/avg_age', snap)
        },
        {
            label: 'Average Hire Age',
            selector: snap => selectNested('leaders/avg_hire_age', snap)
        },
        {
            label: 'Max Age',
            selector: snap => selectNested('leaders/max_age', snap)
        },
        {
            label: 'Max Hire Age',
            selector: snap => selectNested('leaders/max_hire_age', snap)
        },
        {
            label: 'Average Level',
            selector: snap => selectNested('leaders/avg_level', snap),
            yAxis: 'right'
        },
        {
            label: 'Max Level',
            selector: snap => selectNested('leaders/max_level', snap),
            yAxis: 'right'
        },
    ];

    return (
        <Chart name={Name} overlay={props.overlay} title='Leader Stats' titleColor='#65c73c'>
            <LineChart
                name={name}
                data={data}
                allowIsolation={true}
                lines={lines}
                yAxisLabel='Age'
                rightYLabel='Level'
            />
        </Chart>
    );
}

registerChart(
    Name,
    'Shows leader ages and levels over time',
    LeaderStats
);

export default LeaderStats;
