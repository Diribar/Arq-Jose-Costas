window.addEventListener("load", () => {
	// Declarar las variables
	let fas = document.querySelectorAll("#inicio #imagenes #iconos .fas");
	let secuencia = document.querySelector("#inicio #imagenes ul")

	for (let i=0; i<fas.length; i++) {
		fas[i].addEventListener("click", () => {
			if (i == 1) {
				fas[1].classList.add("ocultar")
				fas[2].classList.remove("ocultar")
				secuencia.style.animationPlayState = "paused";
			}
			if (i == 2) {
				fas[1].classList.remove("ocultar");
				fas[2].classList.add("ocultar");
				secuencia.style.animationPlayState = "running";
			} 
			i == 0 ? (secuencia.style.animationDirection = "reverse") : ""
			i == 3 ? (secuencia.style.animationDirection = "normal") : "";
		})
	}

})