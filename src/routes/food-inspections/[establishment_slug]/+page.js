/** @type {import('./$types').PageLoad} */
export async function load ({ parent, params }) {
     const { food_inspections_table } = await parent()

    const food_inspections = food_inspections_table.rows.filter((inspection) => {
        return params.establishment_slug === inspection.id
    })

	return {
        food_inspections
    }
}
