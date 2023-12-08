import posts from '$data/posts.json'
import newsletters from '$data/newsletters.json'

/** @type {import('./$types').LayoutServerLoad */
export async function load () {
    return {
        posts,
        newsletters
    }
}
