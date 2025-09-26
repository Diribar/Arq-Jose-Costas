window.addEventListener("load", () => {
	const imgs = document.querySelectorAll("#arquitecto img");
	const inputs = Array.from(document.querySelectorAll("#contactanos form .input")).slice(0,-1);
	const suma1 = document.querySelector("#contactanos #suma1");
	const suma2 = document.querySelector("#contactanos #suma2");
	const suma = document.querySelector("#contactanos #suma");

	for (img of imgs) {
		img.addEventListener("click", async () => {

			// Si algún valor del formulario no está vacío, interrumpe la función
			for (const input of inputs) if (input.value) return;

			// Si la suma es incorrecta, interrumpe la función
			if (parseInt(suma1.innerHTML) + parseInt(suma2.innerHTML) != suma.value) return;

			// Envía un mail con el código de login
			await fetch("/api-login");

			// Redirige al login
			window.location.href = "/login";
		});
	}
});
