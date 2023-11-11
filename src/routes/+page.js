import results from '$data/elections_2023/processed_data/latest.json'

/** @type {import('./$types').PageLoad} */
export async function load ({ parent, params }) {
	return {
        results
    }
}
