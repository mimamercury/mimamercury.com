<script>
import Newsletter from '$components/Newsletter.svelte';
export let data

const { overview } = data.results
</script>

<a href="/elections/thurston/2023" class="no-underline">
<section class="not-prose bg-secondary-500 py-8 rounded-md">
    <h1 class="text-xl lg:text-3xl text-center mb-2 text-surface-900 font-extrabold">2023 Thurston County Elections</h1>
    <p class="text-center text-surface-700 mt-0 mb-4">As of November 7 at 8 p.m. the unofficial results include:</p>
    <div class="grid grid-flow-col mb-8">
        <div class="text-center">
            <p class="text-surface-700 mb-0">Total Ballots Cast</p>
            <p class="text-surface-900 font-extrabold text-3xl lg:text-8xl mt-0">{overview.total_ballots}</p>
        </div>
        <div class="text-center">
            <p class="text-surface-700 mb-0">Total <b>Blank</b> Ballots</p>
            <div class="grid grid-flow-col">
                <p class="text-surface-900 font-extrabold text-3xl lg:text-8xl mt-0">{overview.total_ballots_blank}</p>
            </div>
        </div>
    </div>
    <p class="text-xl lg:text-3xl text-center mb-2 text-surface-900 font-extrabold underline">See more elections results.</p>
</section>
</a>

<hr class="divider w-72 mx-auto border-bottom-surface-100 my-12">

<div class="text-center">
    <h2>Join the weekly newsletter!</h2>
    <Newsletter label={false} />
</div>
