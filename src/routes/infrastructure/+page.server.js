import { fetchJson } from '@editorialapp/datatools/fetch'

/** @type {import('./$types').PageServerLoad} */
export async function load () {
    const thurston_county_travel_impacts = await fetchJson('https://raw.githubusercontent.com/mimamercury/thurston_county_travel_impacts/main/data/processed/latest.json')
    const thurston_county_travel_impacts_metadata = await fetchJson('https://raw.githubusercontent.com/mimamercury/thurston_county_travel_impacts/main/data/metadata.json')

    const pse_power_outages = await fetchJson('https://raw.githubusercontent.com/mimamercury/pse_power_outages/main/data/processed/latest.json')
    const pse_power_outages_metadata = await fetchJson('https://raw.githubusercontent.com/mimamercury/pse_power_outages/main/data/metadata.json')

    return {
        pse_power_outages: {
            metadata: pse_power_outages_metadata,
            data: pse_power_outages
        },
        thurston_county_travel_impacts: {
            metadata: thurston_county_travel_impacts_metadata,
            data: thurston_county_travel_impacts
        }
    }
}
