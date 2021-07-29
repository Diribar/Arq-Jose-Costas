window.addEventListener("load", () => {
	let encabezado = document.querySelectorAll("header nav")
	let secciones = document.querySelectorAll(".secciones");
	// let destino = secciones.map((n) => {
	// 	n.innerText;
	// });
	console.log(secciones[1].innerHTML);

	for (let i=0; i<encabezado.length; i++) {
		encabezado[i].addEventListener("click", () => {
			document.querySelector("#habilitaciones").scrollIntoView(true)
			window.scrollBy(0, -10);
		})

	}
})