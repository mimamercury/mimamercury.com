<script>
    import { format_date } from '$lib/utils/format.js';
    export let data

    const { food_inspections } = data
    const first = food_inspections[0]
</script>

<svelte:head>
	<title>Food safety inspections for {first.establishment} | The Mima Mercury</title>
    <meta name="description" content="See recent food safety inspections for {first.establishment}">
</svelte:head>

<div class="mb-2">
    <a href="/food-inspections" class="not-prose text-xs text-surface-900 bg-secondary-500 border border-secondary-500 font-sans rounded p-1 no-underline hover:shadow">Food inspections</a>
</div>

<div class="prose dark:prose-invert">
    <h1 class="main-header">
        {first.establishment}
    </h1>
    

</div>

<div class="not-prose font-sans text-sm">
    {first.permit_type} | {first.partial_address}
</div>

{#each food_inspections as inspection}

<div class="my-10">
    <p class="italic not-prose mb-0 lg:text-2xl">Total points</p>
    <span class="font-bold text-7xl lg:text-9xl mt-0 text-primary-500 dark:text-secondary-500">
        {inspection.total_points}    
    </span>
    <div class="grid grid-flow-row">
        <span class="text-1xl lg:text-2xl mt-0">
            Red points: {inspection.red_points}    
        </span>
        <span class="text-1xl lg:text-2xl mt-0">
            Blue points: {inspection.blue_points}    
        </span>
    </div>

    <p class="mt-10">Inspected on {inspection.inspection_date}.</p>
</div>

<div class="main-content prose dark:prose-invert">
    <h3 class="mt-4">Inspection notes</h3>
    {inspection.inspection_notes}
    
    <h3 class="mt-4">Deficiencies</h3>
    {inspection.deficiencies}
    
    </div>
{/each}
