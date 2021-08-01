window.addEventListener("load", () => {
	// Declarar las variables
	let button = document.querySelectorAll("#proyectos button");
	let img = document.querySelectorAll("#proyectos img");

	// Mostrar y ocultar imágenes
	for (let i = 0; i < button.length; i++) {
		button[i].addEventListener("click", () => {
			img[i].classList.remove("ocultar");
			for (let j=0; j < img.length; j++) {
				if (j != i) {
					img[j].classList.add("ocultar");
				}
			}
		})
	}

})