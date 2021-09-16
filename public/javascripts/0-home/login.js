window.addEventListener("load", () => {
	let anchors = document.querySelectorAll("#arquitecto a");

	for (anchor of anchors) {
		anchor.addEventListener("click", (e) => {
			parseInt(suma1.innerHTML) + parseInt(suma2.innerHTML) != suma.value
				? e.preventDefault()
				: "";
		});
	}
});
