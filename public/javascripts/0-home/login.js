window.addEventListener("load", () => {
	let anchors = document.querySelectorAll("#arquitecto a");
	let inputs = document.querySelectorAll("#contactanos form .input");
	let suma1 = document.querySelector("#contactanos #suma1");
	let suma2 = document.querySelector("#contactanos #suma2");
	let suma = document.querySelector("#contactanos #suma");

	for (anchor of anchors) {
		anchor.addEventListener("click", (e) => {
			let limpio = true;
			for (let i = 0; i < inputs.length - 1; i++) {
				inputs[i].value != "" ? (limpio = false) : "";
			}
			parseInt(suma1.innerHTML) + parseInt(suma2.innerHTML) ==
				suma.value && limpio
				? (window.location.href = "/loginnuevo")
				: "";
		});
	}
});
