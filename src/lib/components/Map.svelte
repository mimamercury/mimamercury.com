<script>
	import {
		Map,
		NavigationControl,
		GeolocateControl,
		ScaleControl,
		AttributionControl
	} from 'maplibre-gl';
	import { map } from '$lib/stores/map.js';
	import { PUBLIC_MAPTILER_KEY } from '$env/static/public';

	let mapContainer;

	const init = () => {
		return new Promise(() => {
			const _map = new Map({
				container: mapContainer,
				style: `https://api.maptiler.com/maps/streets/style.json?key=${PUBLIC_MAPTILER_KEY}`,
				center: [-122.909, 47.044],
				zoom: 6,
				hash: true,
				attributionControl: false
			});
			_map.addControl(new NavigationControl({}), 'top-right');
			_map.addControl(
				new GeolocateControl({
					positionOptions: { enableHighAccuracy: true },
					trackUserLocation: true
				}),
				'top-right'
			);
			_map.addControl(new ScaleControl({ maxWidth: 80, unit: 'metric' }), 'bottom-left');
			_map.addControl(new AttributionControl({ compact: true }), 'bottom-right');

            _map.on('click', console.log)
			map.set(_map);
		});
	};

	$: if (mapContainer) {
		init();
	}
</script>

<div class="map" bind:this={mapContainer} />

<style>
	@import 'maplibre-gl/dist/maplibre-gl.css';

	.map {
		height: 300px;
		width: 100%;
		z-index: 1;
	}
</style>
