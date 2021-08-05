window.addEventListener("load", () => {
	// Variables generales
	let form = document.querySelector("#contactanos form");
	let formEnviado = document.querySelector("#contactanos #formEnviado").innerHTML;
	let inputs = document.querySelectorAll("#contactanos form .input");
	let avisoError = document.querySelectorAll("#contactanos .fa-times-circle");
	let RegEx1 = [];
	let RegEx2 = [];

	// Nombre
	RegEx1 = [...RegEx1, /[A-Z ]/i];
	RegEx2 = [...RegEx2, /^[A-Z ]+$/i];

	// Mail
	RegEx1 = [...RegEx1, /[\w\-\.\+\@]/i];
	RegEx2 = [...RegEx2, /^[\w\-\.\+]+\@[a-z0-9\.\-]+\.[a-z0-9]{2,5}$/i];

	// Teléfono
	RegEx1 = [...RegEx1, /[0-9 -()/+]/];
	RegEx2 = [...RegEx2, /^[0-9 -()/+]+$/];

	// Comentario
	RegEx1 = [...RegEx1, /[\w\W]/];
	RegEx2 = [...RegEx2, /^[\w\W]+$/];

	// Suma
	RegEx1 = [...RegEx1, /[\d]/];
	RegEx2 = [...RegEx2, /^[\d]+$/];

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

	// Función validar contenidos
	let validarContenido = (i) => {
		aux = inputs[i].value;
		!RegEx2[i].test(aux)
			? avisoError[i].classList.remove("ocultar")
			: avisoError[i].classList.add("ocultar");
	}

	// Validar campos
	for (let i = 0; i < inputs.length; i++) {
		formEnviado == "SI" ? validarContenido(i) : null;
		inputs[i].addEventListener("keypress", (e) => {
			!RegEx1[i].test(e.key)
				? e.preventDefault()
				: avisoError[i].classList.add("ocultar");
		});
		inputs[i].addEventListener("change", () => {
			validarContenido(i)
		});
	}

	// Validar suma
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
