/** @type {import('./$types').PageLoad} */
export async function load ({ parent, params }) {
	const { posts } = await parent()

  const post = posts.find(post => post.slug === params.post_slug)
	return {
    post
  }
}
