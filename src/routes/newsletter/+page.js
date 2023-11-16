import newsletters from '$data/newsletters.json'

/** @type {import('./$types').PageLoad} */
export async function load ({ parent, params }) {
	return {
        newsletters
    }
}
