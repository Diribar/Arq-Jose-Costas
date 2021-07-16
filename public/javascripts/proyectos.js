window.addEventListener("load", async () => {
	// Declarar las variables
	let button = document.querySelectorAll("#proyectos button");
	let img = document.querySelectorAll("#proyectos img");

	// Mostrar y ocultar imágenes
	for (let i = 0; i < button.length; i++) {
		button[i].addEventListener("click", () => {
			img[i].classList.remove("ocultar");
			img[i].classList.add("mostrar");
			for (let j=0; j < img.length; j++) {
				if (j != i) {
					img[j].classList.add("ocultar");
					img[j].classList.remove("mostrar");
				}
			}
		})
	}

})