window.addEventListener("load", () => {
	let encabezado = document.querySelectorAll("header nav a");

	for (let i = 0; i < encabezado.length; i++) {
		encabezado[i].addEventListener("click", (e) => {
			e.preventDefault();
			aux = encabezado[i].href;
			posicion = aux.lastIndexOf("/");
			destino = aux.slice(posicion + 1);
			//document.querySelector(destino).scrollIntoView();
			// window.scrollTo(0, 200);
			// window.scrollBy(0, -10);
		});
	}
})