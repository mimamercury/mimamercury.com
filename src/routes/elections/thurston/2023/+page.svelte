<script>
import HorizontalBar from '$components/graphs/HorizontalBar.svelte';

export let data;

const { overview, propositions, offices } = data.results;

function percent (num, total) {
    return Math.round((num / total) * 100);
}
</script>

<h1 class="not-prose text-center font-bold text-3xl mb-1">2023 Thurston County Elections</h1>
<p class="italic text-center not-prose mt-0 text-sm text-surface-300">Results as of 8 p.m. November 7, 2023</p>
<div class="grid grid-flow-col justify-center gap-12 mt-12">
    <div class="">
        <p class="text-center text-surface-200 italic not-prose mb-0">Total Ballots Cast</p>
        <p class="font-bold font-sans text-3xl lg:text-8xl mt-0 not-prose text-secondary-500">{overview.total_ballots}</p>
    </div>

    <div class="">
        <p class="text-center text-surface-200 italic not-prose mb-0">Total <b>Blank</b> Ballots</p>
        <div class="grid grid-flow-col">
            <p class="font-bold font-sans text-3xl lg:text-8xl mt-0 not-prose text-secondary-500">{overview.total_ballots_blank}</p>
            <span class="text-3xl lg:text-8xl not-prose text-surface-600"> (</span>
            <span class="text-xs italic text-surface-300 text-md lg:mt-8 mx-2 md:mx-0">why have you <br>people done this?</span>
            <span class="text-3xl lg:text-8xl not-prose text-surface-600">)</span>
        </div>
    </div>
</div>

<hr class="divider w-72 mx-auto border-bottom-surface-100">

{#each propositions as proposition}
<h2>{proposition.title}</h2>
<p>{proposition.description}</p>
<div class="grid grid-flow-col mb-8">
    <p class="not-prose">
        Approved: <br>
        <span class="text-secondary-500 font-sans text-2xl">{proposition.approved}</span> <span>{percent(proposition.approved, proposition.contest_totals)}%</span>
    </p>
    <p class="not-prose">
        Rejected: <br>
        <span class="text-secondary-500 font-sans text-2xl">{proposition.rejected}</span> <span>{percent(proposition.rejected, proposition.contest_totals)}%</span>
    </p>
</div>

<HorizontalBar data={[
    { label: 'Approved', value: proposition.approved },
    { label: 'Rejected', value: proposition.rejected }
]} />
{/each}

<hr class="divider w-72 mx-auto border-bottom-surface-100 my-12">

{#each offices as office}
<p class="not-prose mt-8 mb-0">{office.location.name}</p>
<h2 class="not-prose font-extrabold text-xl lg:text-3xl">{office.title}</h2>
<p class="not-prose text-sm">{office.description}</p>
<div class="grid grid-flow-col mb-8">
    <!-- <p class="not-prose">
        Approved: <br>
        <span class="text-secondary-500 font-sans text-2xl">{proposition.approved}</span> <span>{percent(proposition.approved, proposition.contest_totals)}%</span>
    </p>
    <p class="not-prose">
        Rejected: <br>
        <span class="text-secondary-500 font-sans text-2xl">{proposition.rejected}</span> <span>{percent(proposition.rejected, proposition.contest_totals)}%</span>
    </p> -->
</div>

<HorizontalBar left_padding={165} data={office.candidates.map((candidate) => {
    return {
        label: candidate.name,
        value: candidate.votes
    };
})} />

<hr class="divider w-72 mx-auto border-bottom-surface-100 my-12">
{/each}