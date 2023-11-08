import { results } from '$data/elections_2023/results.js'

/** @type {import('./$types').PageLoad} */
export async function load ({ parent, params }) {
	return {
        results
    }
}
