import "launch.css";

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
