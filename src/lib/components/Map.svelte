<script>
	import {
		Map,
		NavigationControl,
		GeolocateControl,
		ScaleControl,
		AttributionControl
	} from 'maplibre-gl';
	import { map_store } from '$lib/stores/map.js';
	import { PUBLIC_MAPTILER_KEY } from '$env/static/public';

	export let setup
	export let zoom = 9.3
	export let center = [-122.9067, 47.0507]

	export let add_navigation_control = true
	export let add_geolocate_control = true
	export let add_scale_control = true
	export let add_attribution_control = true

	let map_container

	const init = async () => {
			const map = new Map({
				container: map_container,
				style: `https://api.maptiler.com/maps/basic/style.json?key=${PUBLIC_MAPTILER_KEY}`,
				center,
				zoom,
				hash: true,
				attributionControl: false
			});

			if (setup) {
				await setup(map)
			}

			if (add_navigation_control) {
				map.addControl(new NavigationControl({}), 'top-right');
			}

			if (add_geolocate_control) {
				map.addControl( new GeolocateControl({ positionOptions: { enableHighAccuracy: true }, trackUserLocation: true }), 'top-right');
			}

			if (add_scale_control) {
				map.addControl(new ScaleControl({ maxWidth: 80, unit: 'metric' }), 'bottom-left');
			}

			if (add_attribution_control) {
				map.addControl(new AttributionControl({ compact: true }), 'bottom-right');
			}

			map_store.set(map);
	};

	$: if (map_container) {
		init();
	}
</script>

<div class="map" bind:this={map_container} />

<style>
	@import 'maplibre-gl/dist/maplibre-gl.css';

	.map {
		height: 300px;
		width: 100%;
		z-index: 1;
	}
</style>
