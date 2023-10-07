window.addEventListener("load", () => {
	const anchors = document.querySelectorAll("#arquitecto a");
	const inputs = document.querySelectorAll("#contactanos form .input");
	const suma1 = document.querySelector("#contactanos #suma1");
	const suma2 = document.querySelector("#contactanos #suma2");
	const suma = document.querySelector("#contactanos #suma");

	for (anchor of anchors) {
		anchor.addEventListener("click", (e) => {
			let limpio = true;
			for (let i = 0; i < inputs.length - 1; i++) if (inputs[i].value) limpio = false;
			if (parseInt(suma1.innerHTML) + parseInt(suma2.innerHTML) == suma.value && limpio) window.location.href = "/login";
		});
	}
});
