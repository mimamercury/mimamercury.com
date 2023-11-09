<script>
export let data
</script>

<p class="mb-4 font-medium text-lg">Posts</p>

{#each data.posts as post}
<p>
  <a href="/posts/{post.slug}/">
    {post.title}
  </a>
</p>
{/each}
