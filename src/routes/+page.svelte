<script>
import format from 'date-fns/format/index.js'
import Newsletter from '$components/Newsletter.svelte'
import PostListCompact from '$components/PostListCompact.svelte';
export let data

const { overview } = data.results
const formatted_date = format(new Date(overview.date), 'MMMM d')
const formatted_time = format(new Date(overview.date), 'h:mm a')
</script>

<a href="/elections/thurston/2023" class="no-underline">
<section class="not-prose bg-secondary-500 py-8 rounded-md  text-surface-900">
    <h1 class="text-lg md:text-xl lg:text-3xl text-center mb-2 font-extrabold">2023 Thurston County Elections</h1>
    <div class="text-xs md:text-sm text-center mt-0 mb-4">Official results:</div>
    <div class="grid grid-flow-col mb-8">
        <div class="text-center">
            <div class="mb-0">Total Ballots Cast</div>
            <div class="font-extrabold text-3xl lg:text-8xl mt-0">{overview.total_ballots.toLocaleString()}</div>
        </div>
        <div class="text-center">
            <div class="mb-0">Total <b>Blank</b> Ballots</div>
            <div class="grid grid-flow-col">
                <div class="font-extrabold text-3xl lg:text-8xl mt-0">{overview.total_blank_ballots}</div>
            </div>
        </div>
    </div>
    <p class="text-xl lg:text-3xl text-center mb-2 underline">See more election results.</p>
</section>
</a>

<hr class="divider w-72 mx-auto border-bottom-surface-100 my-12 border-surface-200 dark:border-surface-700">

<p class="mb-4 font-bold text-2xl">Recent posts</p>

<PostListCompact posts={data.posts} />

<hr class="divider w-72 mx-auto border-surface-200 dark:border-surface-700 my-12">

<div class="prose dark:prose-invert text-center">
    <h2 class="font-bold">Join the weekly newsletter!</h2>
    <Newsletter label={false} />
    <p class="text-sm italic"><a href="/newsletter">Read recent issues of the newsletter.</a></p>
</div>
