/** @type {import('./$types').LayoutLoad} */
export async function load ({ parent, params }) {
    const response = await fetch('https://raw.githubusercontent.com/mimamercury/food_safety_inspections/main/data/thurston/latest_thurston.json')
    const food_inspections_table = await response.json()

	return {
        food_inspections_table
    }
}
