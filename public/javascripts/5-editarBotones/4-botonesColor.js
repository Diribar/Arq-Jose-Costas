window.addEventListener("load", () => {
	// Variables generales
	let id = document.querySelector("#id").innerHTML;
	let cfb = document.querySelector("#cfb");
	let clb = document.querySelector("#clb");
	let cbb = document.querySelector("#cbb");
	let muestra = document.querySelectorAll("#muestra");
	let ejemplo = document.querySelector("main section button");

	// Ver los colores en el boton y en la muestra
	window.addEventListener("change", () => {
		// Color de fondo
		cfbColor = cfb.value.slice(cfb.value.indexOf(" - ") + 3);
		ejemplo.style.backgroundColor = cfbColor;
		muestra[0].style.backgroundColor = cfbColor;
		// Color de letras
		clbColor = clb.value.slice(clb.value.indexOf(" - ") + 3);
		ejemplo.style.color = clbColor;
		muestra[1].style.backgroundColor = clbColor;
		// Color de borde
		cbbColor = cbb.value.slice(cbb.value.indexOf(" - ") + 3);
		ejemplo.style.borderColor = cbbColor;
		muestra[2].style.backgroundColor = cbbColor;
	});

	ejemplo.addEventListener("click", async () => {
		// Color de fondo
		campo = "color_fondo_boton_id";
		valor = cfb.value.slice(0, cfb.value.indexOf(" - "));
		await funcionModificar(id, campo, valor);
		// Color de letras
		campo = "color_letras_boton_id";
		valor = clb.value.slice(0, clb.value.indexOf(" - "));
		await funcionModificar(id, campo, valor);
		// Color de borde
		campo = "color_borde_boton_id";
		valor = cbb.value.slice(0, cbb.value.indexOf(" - "));
		await funcionModificar(id, campo, valor);
	});
});

// FÓRMULAS *************************************************
let funcionModificar = async (id, campo, valor) => {
	await fetch(
		"/editar/cambiarvalor/?entidad=titulos" +
			"&id=" +
			id +
			"&dato=" +
			valor +
			"&campo=" +
			campo
	);
};
