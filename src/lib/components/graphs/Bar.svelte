<script>
import { getContext } from 'svelte';

const { data, xGet, yGet, xScale, yScale } = getContext('LayerCake');
</script>

<g class="bar-group">
{#each $data as d, i}
    <rect
    class='group-rect fill-primary-400 dark:fill-secondary-900'
    data-id="{i}"
    x="{$xScale.range()[0]}"
    y="{$yGet(d)}"
    height={$yScale.bandwidth()}
    width="{$xGet(d)}"
    ></rect>
{/each}
</g>
