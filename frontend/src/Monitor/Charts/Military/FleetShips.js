import React from 'react';

import Chart from '../Chart';
import StatsChart from '../StatsChart';
import {registerChart} from '../../ChartRegistry';
import {selectNested} from '../Util';

const Name = 'Fleet Ship Stats';

function FleetShips(props) {
    const name = props.name ? props.name : 'fleetships';
    const data = props.data;

    const lines = [
        {
            label: 'Fleet Count',
            selector: snap => selectNested('fleets/total', snap)
        },
        {
            label: 'Average Ship Experience',
            selector: snap => selectNested('fleets/avg_ship_exp', snap),
            yAxis: 'right'
        }
    ];

    return (
        <Chart name={Name} overlay={props.overlay} title='Fleet Ship Stats' titleColor='#de1212'>
            <StatsChart
                name={name}
                data={data}
                keyPaths='fleets/ships'
                extraLines={lines}
                statLabels={['Min Ship Count', 'Max Ship Count', 'Average Ship Count', 'Total Ship Count']}
                yAxisLabel='Ship Count'
                rightYLabel='Experience'
            />
        </Chart>
    );
}

registerChart(
    Name,
    'Breaks down fleet stats over time',
    FleetShips
);

export default FleetShips;
