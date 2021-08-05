window.addEventListener("load", () => {
	// Variables generales
	let form = document.querySelector("#contactanos form");
	let inputs = document.querySelectorAll("#contactanos form .input");
	let avisoError = document.querySelectorAll(
		"#contactanos form .fa-times-circle"
	);
	// Nombre
	let validarNombre = document.querySelector(
		"#contactanos form .input[name='nombre']"
	);
	let avisoErrorNombre = document.querySelector(
		"#contactanos form .fa-times-circle#nombre"
	);
	// Mail
	let validarMail = document.querySelector(
		"#contactanos form .input[name='mail']"
	);
	let avisoErrorMail = document.querySelector(
		"#contactanos form .fa-times-circle#mail"
	);
	// Teléfono
	let validarTelefono = document.querySelector(
		"#contactanos form .input[name='telefono']"
	);
	let avisoErrorTelefono = document.querySelector(
		"#contactanos form .fa-times-circle#telefono"
	);
	// Comentario
	let validarComentario = document.querySelector(
		"#contactanos form .input[name='comentario']"
	);
	let avisoErrorComentario = document.querySelector(
		"#contactanos form .fa-times-circle#comentario"
	);
	// Suma
	let suma1 = parseInt(
		document.querySelector("#contactanos input[name='suma1']").value
	);
	let suma2 = parseInt(
		document.querySelector("#contactanos input[name='suma2']").value
	);
	let validarSuma = document.querySelector(
		"#contactanos form .input[name='suma']"
	);
	let avisoErrorSuma = document.querySelector(
		"#contactanos form .fa-times-circle#suma"
	);

	// Validar nombre
	validarNombre.addEventListener("keypress", (e) => {
		!/[A-Z ]/i.test(e.key)
			? e.preventDefault()
			: avisoErrorNombre.classList.add("ocultar");
	});
	validarNombre.addEventListener("change", () => {
		nombre = validarNombre.value;
		!/^[A-Z ]+$/i.test(nombre)
			? avisoErrorNombre.classList.remove("ocultar")
			: avisoErrorNombre.classList.add("ocultar");
	});

	// Validar mail
	validarMail.addEventListener("change", () => {
		mail = validarMail.value;
		!/^[\w\-\.\+]+\@[a-z0-9\.\-]+\.[a-z0-9]{2,5}$/i.test(mail)
			? avisoErrorMail.classList.remove("ocultar")
			: avisoErrorMail.classList.add("ocultar");
	});

	// Validar teléfono
	validarTelefono.addEventListener("keypress", (e) => {
		!/[0-9 -()/+]/.test(e.key)
			? e.preventDefault()
			: avisoErrorTelefono.classList.add("ocultar");
	});
	validarTelefono.addEventListener("change", () => {
		telefono = validarTelefono.value;
		!/^[0-9 -()/+]+$/.test(telefono)
			? avisoErrorTelefono.classList.remove("ocultar")
			: avisoErrorTelefono.classList.add("ocultar");
	});

	// Validar comentario
	validarComentario.addEventListener("keypress", () => {
		avisoErrorComentario.classList.add("ocultar");
	});

	// Validar suma
	validarSuma.addEventListener("keypress", (e) => {
		!/[0-9]/.test(e.key)
			? e.preventDefault()
			: avisoErrorTelefono.classList.add("ocultar");
	});
	validarSuma.addEventListener("change", () => {
		suma1 + suma2 != validarSuma.value
			? avisoErrorSuma.classList.remove("ocultar")
			: avisoErrorSuma.classList.add("ocultar");
	});

	// Prevenir el submit si hay errores
	form.addEventListener("submit", (e) => {
		suma1 + suma2 != validarSuma.value
			? avisoErrorSuma.classList.remove("ocultar")
			: avisoErrorSuma.classList.add("ocultar");
		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].value == "") {
				avisoError[i].classList.remove("ocultar");
			}
			!avisoError[i].classList.value.includes("ocultar")
				? e.preventDefault()
				: "";
		}
	});
})

// Ayudamemoria de RegEx
// ^ indica que el patrón debe iniciar con los caracteres dentro de los corchetes
// $ indica que el patrón debe finalizar con los caracteres dentro de los corchetes
// [A-Z] indica que los caracteres admitidos son letras del alfabeto
// + indica que los caracteres dentro de los corchetes se pueden repetir
// i indica que validaremos letras mayúsculas y minúsculas (case-insensitive)