import "htmx.org";
import "launch.css";
import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js";

function on_mount() {
	hljs.highlightAll();
	for (const element of document.querySelectorAll("[data-theme-switcher]")) {
		element.addEventListener("click", () => {
			document.documentElement.setAttribute(
				"data-theme",
				element.dataset.themeSwitcher,
			);
		});
	}

	for (const element of document.querySelectorAll("[data-layout-switcher]")) {
		element.addEventListener("click", () => {
			document.body.setAttribute(
				"data-layout",
				element.dataset.layoutSwitcher,
			);
		});
	}
}

on_mount();
document.addEventListener("htmx:afterRequest", on_mount);
