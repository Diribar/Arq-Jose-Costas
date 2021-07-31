window.addEventListener("load", () => {
	// Declarar las variables
	let button = document.querySelectorAll("#proyectos button");
	let img = document.querySelectorAll("#proyectos #imagen div");

	// Mostrar y ocultar imágenes
	for (let i = 0; i < button.length; i++) {
		button[i].addEventListener("click", () => {
			img[i].classList.add("flex-row");
			img[i].classList.remove("ocultar");
			for (let j=0; j < img.length; j++) {
				if (j != i) {
					img[j].classList.remove("flex-row");
					img[j].classList.add("ocultar");
				}
			}
		})
	}

})