import posts from '$data/posts.json'
import newsletters from '$data/newsletters.json'

/** @type {import('$types').LayoutLoad */
export async function load () {
    return {
        posts,
        newsletters
    }
}
