"use strict";
window.addEventListener("load", () => {
	// Variables del DOM
	let DOM = {
		form: document.querySelector("#contactanos form"),
		inputs: document.querySelectorAll("#contactanos form .input"),
		avisoError: document.querySelectorAll("#contactanos .fa-times-circle"),
		suma1: document.querySelector("#contactanos #suma1"),
		suma2: document.querySelector("#contactanos #suma2"),
		suma: document.querySelector("#contactanos #suma"),
		errorSuma: document.querySelector("#contactanos #errorSuma"),
		background: document.querySelector("#contactanos #background"),
		envioExitoso: document.querySelector("#contactanos .cartel#envioExitoso"),
		envioFallido: document.querySelector("#contactanos .cartel#envioFallido"),
		entendido: document.querySelectorAll("#contactanos .cartel button"),
	};
	const RegEx1 = [
		/[A-Z ]/i, // Nombre
		/[\w\-\.\+\@]/i, // Mail
		/[\d -()/+]/, // Teléfono
		/[\w\W]/, // Comentario
		/[\d]/, // Suma
	];
	const RegEx2 = [
		/^[A-Z ]+$/i, // Nombre
		/^[\w\-\.\+]+\@[a-z0-9\.\-]+\.[a-z0-9]{2,5}$/i, // Mail
		/^[\d -()/+]+$/, // Teléfono
		/^[\w\W]+$/, // Comentario
		/^[\d]+$/, // Suma
	];

	// Función validar contenidos
	let cambiarSumandos = () => {
		DOM.suma1.innerHTML = Math.round(Math.random() * 12);
		DOM.suma2.innerHTML = Math.round(Math.random() * 12);
	};

	// Validar campos
	for (let i = 0; i < DOM.inputs.length; i++) {
		DOM.inputs[i].addEventListener("keypress", (e) => {
			RegEx1[i].test(e.key) ? DOM.avisoError[i].classList.add("ocultar") : e.preventDefault();
		});
		DOM.inputs[i].addEventListener("change", () => {
			RegEx2[i].test(DOM.inputs[i].value)
				? DOM.avisoError[i].classList.add("ocultar")
				: DOM.avisoError[i].classList.remove("ocultar");
		});
	}

	// Validar suma
	DOM.suma.addEventListener("change", () => {
		if (parseInt(DOM.suma1.innerHTML) + parseInt(DOM.suma2.innerHTML) != DOM.suma.value) {
			DOM.errorSuma.classList.remove("ocultar");
			cambiarSumandos();
		} else DOM.errorSuma.classList.add("ocultar");
	});

	// Acciones si se elije "submit"
	DOM.form.addEventListener("submit", async (e) => {
		e.preventDefault();

		// Avisa si hay campos vacíos
		let error = false;
		for (let i = 0; i < DOM.inputs.length; i++)
			if (!DOM.inputs[i].value && i != 2) {
				DOM.avisoError[i].classList.remove("ocultar");
				error = true;
			}

		// Acciones si no hay error
		if (!error) {
			// Obtiene los datos
			let datos = "";
			for (n of DOM.inputs) {
				datos += n.name + "=" + encodeURIComponent(n.value) + "&";
			}

			// Intenta enviar el mail
			const mailEnviado = false;
			//await fetch("/contactanos/?" + datos).then((n) => n.json);
			DOM.background.classList.remove("ocultar");

			// Acciones si el mail fue enviado
			if (mailEnviado) {
				DOM.envioExitoso.style.display = "flex";
				DOM.entendido[0].focus();
			} else {
				DOM.envioFallido.style.display = "flex";
				DOM.entendido[1].focus();
			}
		}
	});

	DOM.entendido.forEach((boton, i) => {
		boton.addEventListener("click", () => {
			DOM.envioExitoso.style.display = "none";
			DOM.envioFallido.style.display = "none";
			DOM.background.classList.add("ocultar");
			// Acciones si se eligió el primer botón
			if (!i) {
				for (n of DOM.inputs) n.value = "";
				cambiarSumandos();
			}
		});
	});
});
