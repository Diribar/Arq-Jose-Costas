window.addEventListener("load", () => {
	// Variables del encabezado
	let cfe = document.querySelector("#cfe");
	console.log(cfe)
	let cle = document.querySelector("#cle");
	let encab = document.querySelector("#encab");
	let scfe = document.querySelector("select[name='cfe']");
	let scle = document.querySelector("select[name='cle']");
	let ocfe = document.querySelectorAll("select[name='cfe'] option");
	let ocle = document.querySelectorAll("select[name='cle'] option");
	// Variables del pie de página
	let cfp = document.querySelector("#cfp");
	let clp = document.querySelector("#clp");
	let footer = document.querySelector("#footer");
	let scfp = document.querySelector("select[name='cfp']");
	let sclp = document.querySelector("select[name='clp']");
	let ocfp = document.querySelectorAll("select[name='cfp'] option");
	let oclp = document.querySelectorAll("select[name='clp'] option");

	// Cambiar los colores del encabezado
	encab.style.backgroundColor = cfe.innerHTML;
	encab.style.color = cle.innerHTML;
	scfe.style.color = cle.innerHTML;
	scle.style.color = cle.innerHTML;
	for (let i = 0; i < ocfe.length; i++) {
		ocfe[i].style.backgroundColor = cfe.innerHTML;
		ocle[i].style.backgroundColor = cfe.innerHTML;
	}

	// Cambiar los colores del footer
	footer.style.backgroundColor = cfp.innerHTML;
	footer.style.color = clp.innerHTML;
	scfp.style.color = clp.innerHTML;
	sclp.style.color = clp.innerHTML;
	for (let i = 0; i < ocfp.length; i++) {
		ocfp[i].style.backgroundColor = cfp.innerHTML;
		oclp[i].style.backgroundColor = cfp.innerHTML;
	}

	// Acciones si se cambia un valor
	scfe.addEventListener("change", () => {
		dato = scfe.value;
		campo = "color_fondo_id";
		funcionColor(1, dato, campo);
	});
	scle.addEventListener("change", () => {
		dato = scle.value;
		campo = "color_letras_id";
		funcionColor(1, dato, campo);
	});
	scfp.addEventListener("change", () => {
		dato = scfp.value;
		campo = "color_fondo_id";
		funcionColor(2, dato, campo);
	});
	sclp.addEventListener("change", () => {
		dato = sclp.value;
		campo = "color_letras_id";
		funcionColor(2, dato, campo);
	});
});

const funcionColor = async (id, dato, campo) => {
	console.log(id, dato, campo);
	await fetch(
		"/editar/cambiarvalor/?entidad=encabezado" +
			"&id=" +
			id +
			"&dato=" +
			dato +
			"&campo=" +
			campo
	);
	location.reload();
};
