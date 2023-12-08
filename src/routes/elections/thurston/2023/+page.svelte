<script>
import { format_number, round_decimal } from '@editorialapp/datatools/numbers'
import HorizontalBar from '$components/graphs/HorizontalBar.svelte';
import PostListCompact from '$components/PostListCompact.svelte';
import { format_date, format_time } from '$lib/utils/format.js';

export let data;

const { overview, propositions, offices } = data.results
</script>

<svelte:head>
	<title>2023 Thurston County Elections | The Mima Mercury</title>
    <meta name="description" content="2023 Elections results for Thurston County.">
</svelte:head>

<h1 class="not-prose text-center font-bold text-3xl mb-1">2023 Thurston County Elections</h1>
<p class="italic text-center not-prose mt-0 text-sm">Official results as of {format_date(overview.date)} at {format_time(overview.date)}</p>
<div class="grid grid-flow-col justify-center gap-12 mt-12">
    <div class="">
        <p class="text-center italic not-prose mb-0">Total Ballots Cast</p>
        <span class="font-bold text-3xl lg:text-7xl mt-0 text-primary-500 dark:text-secondary-500">{format_number(overview.total_ballots)}</span>
    </div>

    <div class="">
        <p class="text-center italic not-prose mb-0">Total <b>Blank</b> Ballots</p>
        <div class="grid grid-flow-col">
            <span class="font-bold text-3xl lg:text-7xl mt-0 text-primary-500 dark:text-secondary-500">{overview.total_blank_ballots}</span>
            <span class="text-3xl lg:text-7xl text-gray-300 dark:text-gray-700"> (</span>
            <span class="text-xs italic text-md lg:mt-5">why have you <br>people done this?</span>
            <span class="text-3xl lg:text-7xl text-gray-300 dark:text-gray-700">)</span>
        </div>
    </div>
</div>

<hr class="divider w-72 mx-auto border-surface-200 dark:border-surface-700 my-12">
<p class="not-prose block italic text-center mt-0 text-sm lg:text-base max-w-2xl mx-auto">
    Official results released <b>{format_date(overview.date)}.</b>
</p>
<br>

<hr class="divider w-72 mx-auto border-surface-200 dark:border-surface-700 my-12">

<h3 class="mb-4 font-bold text-2xl center">Recent Elections posts</h3>

<PostListCompact posts={data.posts} />

<hr class="divider w-72 mx-auto border-surface-200 dark:border-surface-700 my-12">

{#each propositions as proposition}
<h2 class="not-prose font-extrabold text-xl lg:text-3xl">{proposition.title}</h2>

<p>{proposition.metadata.description}.</p>
<div class="grid grid-flow-col my-5">
    {#each proposition.candidates as candidate}
    <div class="font-sans">
        <span class="font-bold serif ">{candidate.name}</span> <br>
        <span class="font-sans font-bold text-3xl text-primary-500 dark:text-secondary-500">
            {round_decimal(candidate.percentage, 1)}%
        </span>
        <span class="not-prose font-sans text-sm">
            {format_number(candidate.votes)} votes
        </span>
    </div>
    {/each}
</div>

<HorizontalBar data={proposition.candidates.map((candidate) => {
    return {
        label: candidate.name,
        value: candidate.votes
    };
})} />
{/each}

<hr class="divider w-72 mx-auto border-surface-200 dark:border-surface-700 my-12">

{#each offices as office}
<p class="not-prose mt-8 mb-0">{office.metadata.location?.name}</p>
<h2 class="not-prose font-extrabold text-xl lg:text-3xl">{office.title}</h2>
<p class="not-prose text-sm font-sans mb-3">
    {office.metadata.description}.
    {#if office.candidates.length <= 2}
        <span class="font-bold">{office.candidates[0].name}</span> ran unopposed.
    {/if}
</p>

<div class="grid grid-flow-col mb-5">
    {#each office.candidates as candidate}
    <div class="font-sans">
        <span class="font-bold serif">{candidate.name === 'WRITE-IN' ? 'Write-ins' : candidate.name}</span> <br>
        <span class="text-primary-500 dark:text-secondary-500 font-sans font-bold text-3xl">
            {round_decimal(candidate.percentage, 1)}%
        </span>
        <span class="not-prose font-sans text-sm">
            {format_number(candidate.votes)} votes
        </span>
    </div>
    {/each}
</div>

{#if office.candidates.length > 2}
<HorizontalBar
    left_padding={() => {
        const max_name_length = Math.max(...office.candidates.map((candidate) => {
            return candidate.name.length;
        }));

        return max_name_length * 7;
    }}
    yDomain={(d) => {
        return d.sort((a, b) => {
            if (a.value && b.value) {
                return b.value - a.value;
            }

            return b - a
        }).map((d) => {
            return d.value;
        });
    }}
    data={office.candidates.filter((candidate) => {
        return candidate.name.toLowerCase() !== 'write-in'
    }).map((candidate) => {
        return {
                label: candidate.name,
                value: candidate.votes
            };
        })
    }
/>
{/if}

<hr class="divider w-72 mx-auto border-surface-200 dark:border-surface-700 my-12">
{/each}
