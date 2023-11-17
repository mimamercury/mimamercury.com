<script>
    import { format_date } from '$lib/utils/format.js'

    export let posts
    export let post_type = 'posts'



</script>

{#each posts as post}
<p class="not-prose p-0 mb-3 font-sans">
  <a
    href="/{post_type}/{post.slug}/"
    class="
            not-prose
            font-sans
            border-l-4
            border-surface-100
            dark:border-surface-800
            pl-3
            block
            py-1
            hover:underline
            hover:border-surface-300
            dark:hover:border-surface-500
        "
    >
    {post.title}
    <span class="text-xs font-sans block">{format_date(post.updated)}</span>
  </a>
</p>
{/each}
