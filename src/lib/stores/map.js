import { writable } from 'svelte/store';

// map store for maplibre-gl object
function createMap() {
	const { subscribe, set } = writable(undefined);

	return {
		subscribe: subscribe,
		set: async (map) => {
			set(map);
		}
	};
}
export const map_store = createMap();
