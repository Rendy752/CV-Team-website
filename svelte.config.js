import adapter from '@sveltejs/adapter-auto';

export default {
	kit: {
		adapter: adapter()
	},
	compilerOptions: {
		runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
	}
};