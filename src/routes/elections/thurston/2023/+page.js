import { results } from '$data/elections_2023/results.js'

/** @type {import('./$types').PageLoad} */
export async function load ({ parent, params }) {
    results.offices = results.offices.sort((a, b) => {
        return (a.order || 0) - (b.order || 0)
    })

	return {
        results
    }
}
