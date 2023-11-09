import posts from '$data/posts.json'

/** @type {import('$types').LayoutLoad */
export async function load () {
    const elections_2023_posts = posts.filter((post) => {
        return post.topics.includes('elections_2023')
    })

    return {
        elections_2023_posts,
        posts
    }
}
