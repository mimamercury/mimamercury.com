<script>
import Newsletter from '$components/Newsletter.svelte'
import PostListCompact from '$components/PostListCompact.svelte';
export let data

const posts = [...data.posts, ...data.newsletters].sort((a, b) => {
    const dateA = new Date(a.updated).getTime()
    const dateB = new Date(b.updated).getTime()

    return dateA > dateB ? -1 : dateA < dateB ? 1 : 0
})

console.log('posts', posts)
</script>

<a href="/food-inspections" class="no-underline">
    <section class="not-prose bg-secondary-500 py-8 px-4 rounded-md  text-surface-900">
        <div class="text-center">New!</div>
        <h1 class="text-xl text-center mb-2 font-extrabold">Food safety inspection explorer</h1>
        <p class="text-lg text-center mb-2 underline">See how your favorite restaurant is doing.</p>
    </section>
</a>

<a href="/elections/thurston/2023" class="no-underline mt-10 block hover:bg-surface-100 dark:hover:bg-surface-800">
    <section class="not-prose py-8 rounded-md border border-secondary-500">
        <h1 class="text-xl text-center mb-2 font-extrabold">2023 Thurston County Elections</h1>
        <p class="text-lg text-center mb-2 underline">See the official election results.</p>
    </section>
</a>

<hr class="divider w-72 mx-auto border-bottom-surface-100 my-12 border-surface-200 dark:border-surface-700">

<p class="mb-4 font-bold text-2xl">Recent posts</p>

<PostListCompact {posts} />

<hr class="divider w-72 mx-auto border-surface-200 dark:border-surface-700 my-12">

<div class="prose dark:prose-invert text-center">
    <h2 class="font-bold">Join the weekly newsletter!</h2>
    <Newsletter label={false} />
    <p class="text-sm italic"><a href="/newsletter">Read recent issues of the newsletter.</a></p>
</div>
