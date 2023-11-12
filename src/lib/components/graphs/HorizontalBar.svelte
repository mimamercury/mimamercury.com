<script>
import { LayerCake, Svg } from 'layercake';
import { scaleBand, scaleLinear } from 'd3-scale';
import { modeCurrent } from '@skeletonlabs/skeleton';

import Bar from './Bar.svelte';
import AxisX from './AxisX.svelte';
import AxisY from './AxisY.svelte';

export let data;
export let left_padding = undefined

export const xDomain = [0, null];

const left = typeof left_padding === 'function'
    ? left_padding(data) : (left_padding || 55)

const xKey = 'value';
const yKey = 'label';

data.forEach(d => {
    d[xKey] = +d[xKey];
});

let fill = 'fill-black';
$: fill = $modeCurrent ? 'fill-black' : 'fill-white';
</script>

<style>
/*
    The wrapper div needs to have an explicit width and height in CSS.
    It can also be a flexbox child or CSS grid element.
    The point being it needs dimensions since the <LayerCake> element will
    expand to fill it.
*/
.chart-container {
    width: 100%;
    height: 100px;
}
</style>

<div class="chart-container font-sans">
<LayerCake
    padding={{ top: 0, bottom: 20, left }}
    x={xKey}
    y={yKey}
    xScale={scaleLinear([10, 130], [0, 960])}
    yScale={scaleBand().padding(0.3)}
    xDomain={xDomain}
    yDomain={
        data.sort((a, b) => {
            return b[xKey] - a[xKey];
        }).map(d => d[yKey])
    }
    data={data}
>
    <Svg>
    <!-- <AxisX
        gridlines={true}
        baseline={true}
        snapTicks={true}
    /> -->
    <AxisY
        ticks={1}
        gridlines={false}
        fill_color={fill}
    />
    <Bar />
    </Svg>
</LayerCake>
</div>
