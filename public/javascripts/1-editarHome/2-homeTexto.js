window.addEventListener("load", async () => {
	// Acciones si se cambia un valor
	const IDs = document.querySelectorAll(".filas #id");
	const ne = document.querySelectorAll(".filas input[name='ne']"); // Nombre en el encabezado
	const ts = document.querySelectorAll(".filas input[name='ts']"); // Título en la sección
	const scff = document.querySelectorAll(".filas select[name='cff']"); // Color de fondo
	const sclf = document.querySelectorAll(".filas select[name='clf']"); // Color de letra

	for (let i = 0; i < ts.length; i++) {
		// valida sintaxis y largo
		ne[i].addEventListener("keypress", (e) => valida(e, 20));
		ts[i].addEventListener("keypress", () => valida(ts[i], 50));
		// Hace cambios en la BD
		ne[i].addEventListener("change", async () => {
			if (validaCaracteres(ne[i])) await funcionTexto(ne[i], IDs[i], "nombre_encabezado");
		});
		ts[i].addEventListener("change", async () => {
			if (validaCaracteres(ts[i])) await funcionTexto(ts[i], IDs[i], "titulo_seccion");
		});
		scff[i].addEventListener("change", async () => {
			await funcionTexto(scff[i], IDs[i], "color_fondo_id");
		});
		sclf[i].addEventListener("change", async () => {
			await funcionTexto(sclf[i], IDs[i], "color_letras_id");
		});
	}
});

// FÓRMULAS *************************************************
let valida = (e, largoMax) => {
	// Si se supera el largo, previene el 'keypress'
	if (e.target.value.length >= largoMax) return e.preventDefault();

	// Cambia el color del texto si el contenido no está aprobado
	const contenidoOK = validaCaracteres(e.target);
	contenidoOK ? campo.classList.remove("rojo") : campo.classList.add("rojo");

	// Fin
	return;
};
let validaCaracteres = (campo) => {
	// Variables
	const campo = e.target;
	const valNombre = /^[A-Z][A-Za-z áéíóúüñ\d+-]+$/;
	const contenidoOK = valNombre.test(campo.value);

	//Fin
	return contenidoOK;
};

let funcionTexto = async (celda, ID, campo) => {
	// Variables
	const id = ID.innerHTML;
	const dato = celda.value;

	// Cambia el valor
	await fetch("/edicion/cambia-el-valor/?entidad=titulos" + "&id=" + id + "&dato=" + dato + "&campo=" + campo);
	// Fin
	if (campo == "color_fondo_id" || campo == "color_letras_id") return location.reload();
	else return;
};
