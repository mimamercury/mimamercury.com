<script>
    import { format_date } from '$lib/utils/format.js'
    export let data
    const { newsletter } = data
</script>

<svelte:head>
	<title>{newsletter.title} | The Mima Mercury</title>
    <meta name="description" content="Recent news about the South Puget Sound">
</svelte:head>

<div class="prose dark:prose-invert">
    <div class="mb-2">
        <a href="/newsletter" class="not-prose text-xs text-surface-900 bg-secondary-500 border border-secondary-500 font-sans rounded p-1 no-underline hover:shadow">Newsletter</a>
    </div>
    <h1 class="main-header">
        {newsletter.title}
    </h1>

    <div class="not-prose font-sans text-sm">
        {format_date(newsletter.updated)} | {newsletter.author}
    </div>

    <div class="main-content">
        {@html newsletter.content}
    </div>
</div>
