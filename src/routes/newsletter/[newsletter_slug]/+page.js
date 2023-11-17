import newsletters from '$data/newsletters.json'

/** @type {import('./$types').PageLoad} */
export async function load ({ parent, params }) {

  const newsletter = newsletters.find(newsletter => newsletter.slug === params.newsletter_slug)

	return {
        newsletter
    }
}
