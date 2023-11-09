<script>
export let data
</script>

# Elections

[See results for 2023 Thurston County elections.](/elections/thurston/2023/)


<hr class="divider w-72 mx-auto border-bottom-surface-100">

<p class="mb-4 font-bold text-2xl">Recent Elections posts</p>

{#each data.posts as post}
<p>
  <a href="/posts/{post.slug}/">
    {post.title}
  </a>
</p>
{/each}
