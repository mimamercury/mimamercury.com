<script>
    import maplibre from "maplibre-gl";
    import intersect from '@turf/intersect'
    import bboxPolygon from '@turf/bbox-polygon'
    import MapView from "$components/Map.svelte"
    import { format_date, format_time } from "$lib/utils/format.js";

    const { Marker, Popup } = maplibre

    function unique_features (array, key) {
        const map = new Map(array.map((item) => {
            return [item.properties[key], item]
        }))

        return [...map.values()]
    }

    export let data

    const { pse_power_outages, thurston_county_travel_impacts } = data

    const travel_impacts_list = unique_features(thurston_county_travel_impacts.data.features, 'name')
    const power_outage_list = pse_power_outages.data.featureCollection.features
    const power_outage_list_filtered = power_outage_list.filter((feature) => {
        const bbox = bboxPolygon([-123.329671,46.702132,-122.104797,47.266239])
        return intersect(feature, bbox)
    })

    const travel_impacts_points = thurston_county_travel_impacts.data.features.filter((feature) => {
        return feature.geometry.type === 'Point'
    })

    const pse_power_outage_points = power_outage_list.map((feature) => {
        const point = Object.assign({},feature.properties.point_of_interest )
        point.properties = feature.properties
        return point
    })

    function setup (map) {
        map.on('load', () => {
            map.addSource('pse_power_outages', {
                type: 'geojson',
                data: pse_power_outages.data.featureCollection
            })

            map.addLayer({
                id: 'pse_power_outages',
                source: 'pse_power_outages',
                type: 'fill',
                paint: {
                    'fill-color': '#ff0000'
                }
            })

            map.addSource('thurston_county_travel_impacts', {
                type: 'geojson',
                data: thurston_county_travel_impacts.data
            })

            map.addLayer({
                id: 'pse_power_outages_lines',
                source: 'pse_power_outages',
                type: 'line',
                paint: {
                    'line-color': '#ff0000',
                    'line-width': 3
                }
            })

            map.addLayer({
                id: 'thurston_county_travel_impacts_lines',
                source: 'thurston_county_travel_impacts',
                type: 'line',
                paint: {
                    'line-color': '#ff0000',
                    'line-width': 3
                }
            })

            for (const point of travel_impacts_points) {
                console.log('point', point)
                const marker = new Marker({
                    color: '#eb6157'
                })
                marker.setLngLat(point.geometry.coordinates)

                marker.setPopup(new Popup().setHTML(`<div>
                    <span class="font-bold">${point.properties.name}</span><br>
                    <span class="">${point.properties.description}</span>
                </div>`))
                marker.addTo(map)
            }

            for (const point of pse_power_outage_points) {
                const marker = new Marker({ color: '#570a35' })
                marker.setLngLat(point.geometry.coordinates)

                const fields = []
                for (const [key, value] of Object.entries(point.properties)) {
                    if (value.name && value.value && key !== 'point_of_interest') {
                        fields.push(`<div class="font-xs">
                            <span class="font-semibold">${value.name}:</span>
                            <span>${value.value}</span>
                        </div>`)
                    }
                    
                }
                marker.setPopup(new Popup().setHTML(`
                    <h1 class="font-bold">${point.properties.title}</h1>
                    ${fields.join('\n')}
                `))
                marker.addTo(map)
            }

            map.on('click', 'pse_power_outages', (e) => {
                const features = map.querySourceFeatures('pse_power_outages')

            })

            map.on('mousemove', function (e) {
                var features = map.queryRenderedFeatures(e.point, { layers: ['pse_power_outages'] });
                map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
            })
        })
    }
</script>

<svelte:head>
	<title>Power outages & road closures</title>
    <meta name="description" content="Learn about recent food safety inspections in Thurston County.">
</svelte:head>

<div class="prose dark:prose-invert mb-5">
    <h1>Power outages & road closures</h1>
</div>

<p class="text-xs not-prose font-sans mb-6">
    Power outage data from 
    <a href="{pse_power_outages.metadata.source_url}" class="underline">{pse_power_outages.metadata.source_name}</a>.

    <span class="">
        Updated {format_date(pse_power_outages.metadata.last_updated)} {format_time(pse_power_outages.metadata.last_updated)}
    </span>
    <br>
    Road closure data from 
    <a href="{thurston_county_travel_impacts.metadata.source_url}" class="underline">{thurston_county_travel_impacts.metadata.source_name}</a>.

    <span class="">
        Updated {format_date(thurston_county_travel_impacts.metadata.last_updated)} {format_time(thurston_county_travel_impacts.metadata.last_updated)}
    </span>
</p>

<div class="border border-surface-100 dark:border-surface-500 p-2 rounded-sm grid grid-flow-col text-xs font-sans justify-start gap-4 mb-2">
    <div>
        <div class="bg-[#eb6157] w-4 h-4 inline-block align-middle rounded-sm"></div> <div class="inline-block align-middle">Road closures</div>
    </div>

    <div>
        <div class="bg-[#570a35] w-4 h-4 inline-block align-middle rounded-sm"></div> <div class="inline-block align-middle">Power outages</div>
    </div>
    
</div>

<MapView {setup} zoom={7.5} />

<hr class="divider my-10" />

<h2 class="text-3xl font-bold">Road closures & other travel impacts</h2>
<p class="text-xs not-prose font-sans mb-6">
    Road closure data from 
    <a href="{thurston_county_travel_impacts.metadata.source_url}" class="underline">{thurston_county_travel_impacts.metadata.source_name}</a>.
    <br>
    <span class="">
        Updated {format_date(thurston_county_travel_impacts.metadata.last_updated)} {format_time(thurston_county_travel_impacts.metadata.last_updated)}
    </span>
</p>

{#each travel_impacts_list as feature}
    <h1 class="font-bold text-2xl">{feature.properties.name}</h1>
    <p class="font-sans mb-8">{feature.properties.description}</p>
{/each}

<hr class="divider my-10" />

<h2 class="text-3xl font-bold">Power outages</h2>
<p class="text-xs not-prose font-sans mb-6">
    Power outage data from 
    <a href="{pse_power_outages.metadata.source_url}" class="underline">{pse_power_outages.metadata.source_name}</a>.
    <br>
    <span class="">
        Updated {format_date(pse_power_outages.metadata.last_updated)} {format_time(pse_power_outages.metadata.last_updated)}
    </span>
</p>

{#each power_outage_list_filtered as feature}
<div class="mb-6">
    <h1 class="font-bold text-2xl">{feature.properties.title}</h1>

    {#each Object.entries(feature.properties) as [key, value]}
        {#if key && value && value.value && key !== 'point_of_interest'}
        <div class="font-xs font-sans">
            <span class="font-semibold">{value.name}:</span>
            <span>{value.value}</span>
        </div>
        {/if}
    {/each}
</div>
{/each}
