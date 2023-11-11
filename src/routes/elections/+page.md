<script>
export let data
</script>

# Elections

[See results for 2023 Thurston County elections.](/elections/thurston/2023/)


<hr class="divider w-72 mx-auto border-bottom-surface-100">

<p class="mb-4 font-bold text-2xl">Recent Elections posts</p>

{#each data.posts as post}
<p class="not-prose p-0 mb-3 font-sans">
  <a href="/posts/{post.slug}/" class="not-prose font-sans border-l-4 border-surface-800 pl-3 block py-1 hover:underline hover:border-surface-600">
    {post.title}
  </a>
</p>
{/each}
