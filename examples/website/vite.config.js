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
	build: {
		rollupOptions: {
			input: {
				index: get_path("./index.html"),
				blog: get_path("./blog.html"),
				post: get_path("./post.html"),
			},
		},
	},
};
