<script>
import format from 'date-fns/format'
import Newsletter from '$components/Newsletter.svelte'
export let data

const { overview } = data.results
const formatted_date = format(new Date(overview.date), 'MMMM d')
const formatted_time = format(new Date(overview.date), 'h:mm a')
</script>

<a href="/elections/thurston/2023" class="no-underline">
<section class="not-prose bg-secondary-500 py-8 rounded-md">
    <h1 class="text-lg md:text-xl lg:text-3xl text-center mb-2 text-surface-900 font-extrabold">2023 Thurston County Elections</h1>
    <div class="text-xs md:text-sm text-center text-surface-700 mt-0 mb-4">As of {formatted_date} at {formatted_time} the unofficial results include:</div>
    <div class="grid grid-flow-col mb-8">
        <div class="text-center">
            <div class="text-surface-700 mb-0">Total Ballots Cast</div>
            <div class="text-surface-900 font-extrabold text-3xl lg:text-8xl mt-0">{overview.total_ballots.toLocaleString()}</div>
        </div>
        <div class="text-center">
            <div class="text-surface-700 mb-0">Total <b>Blank</b> Ballots</div>
            <div class="grid grid-flow-col">
                <div class="text-surface-900 font-extrabold text-3xl lg:text-8xl mt-0">{overview.total_blank_ballots}</div>
            </div>
        </div>
    </div>
    <p class="text-xl lg:text-3xl text-center mb-2 text-surface-900 font-extrabold underline">See more elections results.</p>
</section>
</a>

<hr class="divider w-72 mx-auto border-bottom-surface-100">

<p class="mb-4 font-bold text-2xl">Recent posts</p>

{#each data.posts as post}
<p>
  <a href="/posts/{post.slug}/">
    {post.title}
  </a>
</p>
{/each}


<hr class="divider w-72 mx-auto border-bottom-surface-100 my-12">

<div class="text-center">
    <h2>Join the weekly newsletter!</h2>
    <Newsletter label={false} />
</div>
