<script>
import PostListCompact from '$components/PostListCompact.svelte'
export let data
</script>

<div class="prose dark:prose-invert">

# Elections

[See results for 2023 Thurston County elections.](/elections/thurston/2023/)

<hr class="divider w-72 mx-auto border-bottom-surface-100">

<p class="mb-4 font-bold text-2xl">Recent Elections posts</p>
</div>

<PostListCompact posts={data.elections_2023_posts} />
