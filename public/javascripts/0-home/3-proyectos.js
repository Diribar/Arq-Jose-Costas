window.addEventListener("load", () => {
	// Declarar las variables
	let button = document.querySelectorAll("#proyectos #botones button");
	let desplegable = document.querySelectorAll("#proyectos #menu-proyectos nav");
	let grupo = document.querySelectorAll("#proyectos #imagen .grupo");

	// Mostrar y ocultar imágenes
	for (let i = 0; i < button.length; i++) {
		button[i].addEventListener("click", () => {
			grupo[i].classList.add("flex-row");
			grupo[i].classList.remove("ocultar");
			for (let j=0; j < grupo.length; j++) {
				if (j != i) {
					grupo[j].classList.remove("flex-row");
					grupo[j].classList.add("ocultar");
				}
			}
		})
		desplegable[i].addEventListener("click", () => {
			grupo[i].classList.add("flex-row");
			grupo[i].classList.remove("ocultar");
			for (let j = 0; j < grupo.length; j++) {
				if (j != i) {
					grupo[j].classList.remove("flex-row");
					grupo[j].classList.add("ocultar");
				}
			}
		});
	}

})