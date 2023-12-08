<script>
export let data
</script>

<svelte:head>
	<title>Recent Posts | The Mima Mercury</title>
  <meta name="description" content="Recent news about the South Puget Sound">
</svelte:head>

<p class="mb-4 font-medium text-lg">Posts</p>

{#each data.posts as post}
<p>
  <a href="/posts/{post.slug}/">
    {post.title}
  </a>
</p>
{/each}
