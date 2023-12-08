<script>
    import format from 'date-fns/format/index.js'
    export let data

    const { post } = data
    const date = post.updated > post.created ? new Date(post.updated) : new Date(post.created)
    const formatted_date = format(new Date(date), 'MMMM d, yyyy')
</script>

<svelte:head>
	<title>{data.post.title} | The Mima Mercury</title>
  <meta name="description" content="Recent news about the South Puget Sound">
</svelte:head>

<h1 class="main-header">
    {data.post.title}
</h1>

<div class="not-prose font-sans text-sm">
    {formatted_date} | {data.post.author}
</div>

<div class="main-content">
    {@html data.post.content}
</div>
