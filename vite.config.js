import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()]
});

// function build_data () {  
// 	return {
// 		name: 'build_data',
// 		buildStart(a, b, c) {
// 			console.log('buildStart', a, b, c)
// 		},
// 		watchChange(a, b, c) {
// 			console.log('watchChange', a, b, c)
// 		}
// 	}
// }
