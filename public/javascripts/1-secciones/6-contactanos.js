window.addEventListener("load", () => {
	// Variables generales
	let form = document.querySelector("#contactanos form");
	let inputs = document.querySelectorAll("#contactanos form .input");
	let avisoError = document.querySelectorAll("#contactanos .fa-times-circle");
	let suma1 = document.querySelector("#contactanos #suma1");
	let suma2 = document.querySelector("#contactanos #suma2");
	let suma = document.querySelector("#contactanos #suma");
	let errorSuma = document.querySelector("#contactanos #errorSuma");
	let background = document.querySelector("#contactanos #background");
	let envioExitoso = document.querySelector("#contactanos #envioExitoso");
	let entendido = document.querySelector("#contactanos #envioExitoso button");

	// Nombre
	RegEx1 = [/[A-Z ]/i];
	RegEx2 = [/^[A-Z ]+$/i];

	// Mail
	RegEx1 = [...RegEx1, /[\w\-\.\+\@]/i];
	RegEx2 = [...RegEx2, /^[\w\-\.\+]+\@[a-z0-9\.\-]+\.[a-z0-9]{2,5}$/i];

	// Teléfono
	RegEx1 = [...RegEx1, /[\d -()/+]/];
	RegEx2 = [...RegEx2, /^[\d -()/+]+$/];

	// Comentario
	RegEx1 = [...RegEx1, /[\w\W]/];
	RegEx2 = [...RegEx2, /^[\w\W]+$/];

	// Suma
	RegEx1 = [...RegEx1, /[\d]/];
	RegEx2 = [...RegEx2, /^[\d]+$/];

	// Función validar contenidos
	let cambiarSumandos = () => {
		suma1.innerHTML = Math.round(Math.random() * 12);
		suma2.innerHTML = Math.round(Math.random() * 12);
	}

	// Validar campos
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener("keypress", (e) => {
			RegEx1[i].test(e.key)
				? avisoError[i].classList.add("ocultar")
				: e.preventDefault();
		});
		inputs[i].addEventListener("change", () => {
			RegEx2[i].test(inputs[i].value)
				? avisoError[i].classList.add("ocultar")
				: avisoError[i].classList.remove("ocultar");
		});
	}

	// Validar suma
	suma.addEventListener("change", () => {
		if (
			parseInt(suma1.innerHTML) + parseInt(suma2.innerHTML) !=
			suma.value
		) {
			errorSuma.classList.remove("ocultar");
			cambiarSumandos();
		} else errorSuma.classList.add("ocultar");
	});

	// Acciones si se elije "submit"
	form.addEventListener("submit", async (e) => {
		e.preventDefault();
		var error = false;
		for (let i = 0; i < inputs.length; i++) {
			// Avisar si hay campos vacíos
			if (inputs[i].value == "" && i != 2) {
				avisoError[i].classList.remove("ocultar");
			}
			// Detectar si hay errores
			!avisoError[i].classList.value.includes("ocultar")
				? (error = true)
				: "";
		}
		if (!error) {
			datos = "";
			for (n of inputs) {
				datos = datos + n.name + "=" + encodeURIComponent(n.value) + "&";
			}
			mailEnviado = await fetch("/form/?" + datos).then(n => n.json);
			envioExitoso.style.display = "flex"
			background.classList.remove("ocultar");
		}
	});

	entendido.addEventListener("click", () => {
		envioExitoso.style.display = "none";
		background.classList.add("ocultar");
		for (n of inputs) {
			n.value = ""
		}
		cambiarSumandos();
	})

});
