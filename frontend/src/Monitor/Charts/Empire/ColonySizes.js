import React from 'react';

import Chart from '../Chart';
import AreaChart from '../AreaChart';
import {registerChart} from '../../ChartRegistry';

import {selectNested, findKeysOverSeries, findNested} from '../Util';

const Name = 'Colony Sizes';

function ColonySizes(props) {
    const name = props.name ? props.name : 'colonysizes';
    const data = props.data;

    const planetKeys = findKeysOverSeries(data, 'planets/list');
    const areas = planetKeys.map(key => {
        return {
            label: findNested(`planets/list/${key}/name`, data, `Planet ${key}`),
            selector: snap => selectNested(`planets/list/${key}/size`, snap)
        };
    });

    return (
        <Chart name={Name} overlay={props.overlay} title='Colony Sizes' titleColor='#96d636'>
            <AreaChart
                name={name}
                data={data}
                areas={areas}
                stack={true}
                allowIsolation={true}
            />
        </Chart>
    );
}

registerChart(
    Name,
    'Shows colony sizes stacked together time',
    ColonySizes
);

export default ColonySizes;
