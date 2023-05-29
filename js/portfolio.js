window.addEventListener("DOMContentLoaded", () => {
	const overlayList = document.querySelectorAll(".overlay");

	overlayList.forEach((overlay) => {
		setTimeout(function () {
			overlay.style.transitionDuration = "250ms";
		}, 500);
	});
});
