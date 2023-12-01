/** @type {import('./$types').PageLoad} */
export async function load ({ parent, params }) {
	const { posts } = await parent()
console.log('posts', posts)
  const post = posts.find(post => post.slug === params.post_slug)
  console.log('post', post, params)
	return {
    post
  }
}
