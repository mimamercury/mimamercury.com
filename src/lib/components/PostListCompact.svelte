<script>
    export let posts
</script>

{#each posts as post}
<p class="not-prose p-0 mb-3 font-sans">
  <a
    href="/posts/{post.slug}/"
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
  </a>
</p>
{/each}
