import React from 'react';

import Chart from '../Chart';
import AreaChart from '../AreaChart';
import {selectNested, findKeysOverSeries} from '../Util';
import {registerChart} from '../../ChartRegistry';

const Name = 'Pops';

function Pops(props) {
    const name = props.name ? props.name : 'pops';
    const data = props.data;

    const keys = findKeysOverSeries(data, 'pops/species');
    const areas = keys.map(key => {
        return {
            label: key,
            selector: snap => selectNested(`pops/species/${key}`, snap)
        };
    });

    return (
        <Chart name={Name} overlay={props.overlay} title='Pops' titleColor='#65c73c'>
            <AreaChart
                name={name}
                data={data}
                allowIsolation={true}
                stack={true}
                areas={areas}
            />
        </Chart>
    );
}

registerChart(
    Name,
    'Shows population and species breakdown over time',
    Pops
);

export default Pops;
