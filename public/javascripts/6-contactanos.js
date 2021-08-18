window.addEventListener("load", () => {
	// Variables generales
	let form = document.querySelector("#contactanos form");
	let inputs = document.querySelectorAll("#contactanos form .input");
	let avisoError = document.querySelectorAll("#contactanos .fa-times-circle");
	let RegEx1 = [];
	let RegEx2 = [];
	let suma1 = document.querySelector("#contactanos #suma1");
	let suma2 = document.querySelector("#contactanos #suma2");
	let suma = document.querySelector("#contactanos #suma");
	let errorSuma = document.querySelector("#contactanos #errorSuma");

	// Nombre
	RegEx1 = [...RegEx1, /[A-Z ]/i];
	RegEx2 = [...RegEx2, /^[A-Z ]+$/i];

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
			suma1.innerHTML = Math.round(Math.random() * 12);
			suma2.innerHTML = Math.round(Math.random() * 12);
		} else errorSuma.classList.add("ocultar");
	});

	// Acciones si se elije "submit"
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		let error = false;
		for (let i = 0; i < inputs.length; i++) {
			// Avisar si hay campos vacíos
			if (inputs[i].value == "" && i != 2) {
				avisoError[i].classList.remove("ocultar");
			}
			// Prevenir el submit si hay errores
			!avisoError[i].classList.value.includes("ocultar")
				? (error = true)
				: "";
		}
		//if (!error) {
		datos = "";
		for (n of inputs) {
			datos = datos + n.name + "=" + n.value + "&";
		}
		//}
		//console.log(datos);
		//fetch("/form/?" + datos);
	});
});
