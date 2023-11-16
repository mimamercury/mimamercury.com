<script>
import Newsletter from "$components/Newsletter.svelte";
import PostListCompact from "$components/PostListCompact.svelte"

export let data

const { newsletters } = data

</script>

<div class="prose dark:prose-invert">

# Join the newsletter!

The weekly newsletter of _The Mima Mercury_ includes events, recent news from this publication and others, and whatever other interesting South Sound topics we can find. It's free. It's easy to sign up. It's easy to unsubscribe.

There aren't a lot of great publications covering the South Sound. With your support _The Mima Mercury_ can help change that.

<Newsletter />

</div>

<hr class="divider w-72 mx-auto border-bottom-surface-100 my-12 border-surface-200 dark:border-surface-700">

<p class="mb-4 font-bold text-2xl">Recent newsletter issues</p>

<PostListCompact posts={newsletters} />

<hr class="divider w-72 mx-auto border-surface-200 dark:border-surface-700 my-12">
