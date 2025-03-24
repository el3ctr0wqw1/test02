import "@dittmann/ui";

for (const element of document.querySelectorAll("[data-theme-switcher]")) {
	element.addEventListener("click", () => {
		document.documentElement.setAttribute(
			"data-theme",
			element.dataset.themeSwitcher,
		);
	});
}
