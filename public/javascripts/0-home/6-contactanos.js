"use strict";
window.addEventListener("load", () => {
	// Variables
	const DOM = {
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
	let hayErrores, sumaConErrores;

	// Funciones

	const FN = {
		cambiaSumandos: () => {
			DOM.suma1.innerHTML = Math.round(Math.random() * 10);
			DOM.suma2.innerHTML = Math.round(Math.random() * 10);
			return;
		},
		validaForm: () => {
			// Variables
			hayErrores = false;

			// Revisa los campos
			for (let i = 0; i < DOM.inputs.length; i++) {
				// Averigua si hay algún error
				const hayError =
					((i == 2 && DOM.inputs[i].value) || i != 2) && // como el teléfono es opcional (i==2), sólo se verifica si tiene algún valor
					!RegEx2[i].test(DOM.inputs[i].value); // si no se aprueba el test, es error

				// Acciones dependiendo de si hay algún error
				DOM.avisoError[i].classList[hayError ? "remove" : "add"]("ocultar");
				if (hayError) hayErrores = true;
			}

			// Fin
			return;
		},
		validaSuma: function () {
			// Variables
			sumaConErrores = parseInt(DOM.suma1.innerHTML) + parseInt(DOM.suma2.innerHTML) != DOM.suma.value;

			// Acciones
			DOM.errorSuma.classList[sumaConErrores ? "remove" : "add"]("ocultar");
			if (sumaConErrores) this.cambiaSumandos();

			// Fin
			return;
		},
	};

	// Add event listeners
	for (let i = 0; i < DOM.inputs.length; i++) {
		// Previene inputs no deseados
		DOM.inputs[i].addEventListener("keypress", (e) =>
			RegEx1[i].test(e.key) ? DOM.avisoError[i].classList.add("ocultar") : e.preventDefault()
		);

		// Avisa si hay errores
		DOM.inputs[i].addEventListener("change", () =>
			RegEx2[i].test(DOM.inputs[i].value)
				? DOM.avisoError[i].classList.add("ocultar")
				: DOM.avisoError[i].classList.remove("ocultar")
		);
	}

	// Valida suma
	DOM.suma.addEventListener("change", () => FN.validaSuma());

	// Acciones si se elije "submit"
	DOM.form.addEventListener("submit", async (e) => {
		// Funciones
		e.preventDefault();
		FN.validaForm();
		FN.validaSuma();

		// Si hay algún error, interrumpe la función
		if (hayErrores || sumaConErrores) return;

		// Obtiene los datos
		let datos = "";
		for (let n of DOM.inputs) datos += n.name + "=" + encodeURIComponent(n.value) + "&";

		// Intenta enviar el mail
		DOM.background.classList.remove("ocultar");
		const mailEnviado = await fetch("/contactanos/?" + datos).then((n) => n.json());

		// Acciones si el mail fue enviado
		if (mailEnviado) {
			DOM.envioExitoso.style.display = "flex";
			DOM.entendido[0].focus();
		} else {
			DOM.envioFallido.style.display = "flex";
			DOM.entendido[1].focus();
		}

		// Fin
		return;
	});

	DOM.entendido.forEach((boton, i) => {
		boton.addEventListener("click", () => {
			// Oculta sectores
			DOM.envioExitoso.style.display = "none";
			DOM.envioFallido.style.display = "none";
			DOM.background.classList.add("ocultar");

			// Acciones si se eligió el primer botón
			if (!i) {
				for (let n of DOM.inputs) n.value = "";
				FN.cambiaSumandos();
			}
		});
	});
});
