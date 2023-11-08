<script>
import { LayerCake, Svg } from 'layercake';
import { scaleBand } from 'd3-scale';

import Bar from './Bar.svelte';
import AxisX from './AxisX.svelte';
import AxisY from './AxisY.svelte';

export let data;
export let left_padding = 55

const xKey = 'value';
const yKey = 'label';

data.forEach(d => {
    d[xKey] = +d[xKey];
});
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
    height: 250px;
}
</style>

<div class="chart-container">
<LayerCake
    padding={{ top: 0, bottom: 20, left: left_padding }}
    x={xKey}
    y={yKey}
    yScale={scaleBand().padding(0.3)}
    xDomain={[0, null]}
    data={data}
>
    <Svg>
    <AxisX
        gridlines={true}
        baseline={true}
        snapTicks={true}
    />
    <AxisY
        gridlines={false}
    />
    <Bar/>
    </Svg>
</LayerCake>
</div>
