import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ out: 'dist' })
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
