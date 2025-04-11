import handlebars from "vite-plugin-handlebars";

/**
 * @param {string} relative
 * @returns {string}
 */
function get_path(relative) {
	return new URL(relative, import.meta.url).pathname;
}

/**
 * @type {import('vite').UserConfig}
 */
export default {
	plugins: [
		handlebars({
			partialDirectory: get_path("./partials"),
		}),
	],
	build: {
		rollupOptions: {
			input: {
				index: get_path("./index.html"),
				docs: get_path("./docs.html"),
			},
		},
	},
};
