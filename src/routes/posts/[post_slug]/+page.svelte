<script>
    import format from 'date-fns/format/index.js'
    export let data
    const { post } = data
    const date = data.post.updated > data.post.created ? new Date(data.post.updated) : new Date(data.post.created)
    const formatted_date = format(new Date(date), 'MMMM d, yyyy')
</script>

<h1 class="main-header">
    {data.post.title}
</h1>

<div class="not-prose font-sans text-sm">
    {formatted_date} | {data.post.author}
</div>

<div class="main-content">
    {@html data.post.content}
</div>
