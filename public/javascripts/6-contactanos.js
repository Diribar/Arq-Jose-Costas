window.addEventListener("load", () => {
	// Variables generales
	let form = document.querySelector("#contactanos form")
	let inputs = document.querySelectorAll("#contactanos form .input")
	let avisoError = document.querySelectorAll("#contactanos form .fa-times-circle");
	// Nombre
	let validarNombre = document.querySelector("#contactanos form .input[name='nombre']");
	let avisoErrorNombre = document.querySelector("#contactanos form .fa-times-circle#nombre");
	// Mail
	let validarMail = document.querySelector("#contactanos form .input[name='mail']");
	let avisoErrorMail = document.querySelector("#contactanos form .fa-times-circle#mail");
	// Validar la suma
	let suma1 = parseInt(document.querySelector("#contactanos input[name='suma1']").value);
	let suma2 = parseInt(document.querySelector("#contactanos input[name='suma2']").value);
	let validarSuma = document.querySelector("#contactanos .input[name='validar']");

	// Ejecutar las rutinas
	form.addEventListener("submit", (e) => {
		//e.preventDefault();
		for (let i=0; i<inputs.length; i++) {
			if (inputs[i].value == "") {
				avisoError[i].classList.remove("ocultar");
			}
			!avisoError[i].classList.value.includes("ocultar") ? e.preventDefault() : ""
		}
	})

	validarNombre.addEventListener("keypress", (e) => {
		!/[a-zA-z ]/.test(e.key)
			? e.preventDefault()
			: avisoErrorNombre.classList.add("ocultar");
	});

	validarNombre.addEventListener("change", () => {
		nombre = validarNombre.value;
		!/[a-zA-z ]$/.test(nombre)
			? avisoErrorNombre.classList.remove("ocultar")
			: avisoErrorNombre.classList.add("ocultar");
	});


	validarMail.addEventListener("change", () => {
		mail = validarMail.value;
		!/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,5}$/.test(mail)
			? avisoErrorMail.classList.remove("ocultar")
			: avisoErrorMail.classList.add("ocultar");
	});

	validarSuma.addEventListener("change", () => {
		(suma1 + suma2 != validarSuma.value)
			? avisoError[avisoError.length - 1].classList.remove("ocultar")
			: avisoError[avisoError.length - 1].classList.add("ocultar");
	});

})