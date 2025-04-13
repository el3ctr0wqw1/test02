import "launch.css";
import "htmx.org";
import "htmx-ext-preload";
import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("javascript", javascript);

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
