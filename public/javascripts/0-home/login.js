window.addEventListener("load", () => {
	const anchors = document.querySelectorAll("#arquitecto a");
	const inputs = document.querySelectorAll("#contactanos form .input");
	const suma1 = document.querySelector("#contactanos #suma1");
	const suma2 = document.querySelector("#contactanos #suma2");
	const suma = document.querySelector("#contactanos #suma");

	for (anchor of anchors) {
		anchor.addEventListener("click", () => {
			// Si algún valor del formulario no está vacío, interrumpe la función
			for (const input of inputs) if (input.value) return;

			// Si la suma es incorrecta, interrumpe la función
			if (parseInt(suma1.innerHTML) + parseInt(suma2.innerHTML) != suma.value) return;

			// Envía el mail


			// Redirige al login
			window.location.href = "/login";
		});
	}
});
