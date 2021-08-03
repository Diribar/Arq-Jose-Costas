window.addEventListener("load", () => {
	// Declarar las variables
	let ancho = document.querySelector("#inicio #imagenes").offsetWidth;
	let contenedor = document.querySelector("#inicio #imagenes ul")
	contenedor.style.transform = 'translateX(0px)'
	let imagenes = document.querySelectorAll("#inicio #imagenes ul li")
	let iconos = document.querySelectorAll("#inicio #imagenes #iconos .fas");
	var transicion = '1000ms'
	let duracionLoop = 3000

	// Función slider
	let slider = () => {
		contenedor.style.transitionDuration = transicion
		secuencia = -parseInt(contenedor.style.transform.slice(11,-3))/ancho
		secuencia = secuencia + 1
		margen = secuencia * ancho
		contenedor.style.transform = 'translateX(-' + margen + 'px)'
		if (secuencia >= imagenes.length - 1) {
			setTimeout(() => {
				secuencia = 0;
				contenedor.style.transitionDuration = '0s'
				contenedor.style.transform = 'translateX(0px)'
			}, parseInt(transicion))
		}
		secuencia >= imagenes.length - 1
			? (iconos[0].style.opacity = 0)
			: (iconos[0].style.opacity = 1);
		secuencia == imagenes.length - 2
			? (iconos[3].style.opacity = 0)
			: (iconos[3].style.opacity = 1);
	}

	// Ejecutar
	let loop = setInterval(slider, duracionLoop)

	for (let i=0; i<iconos.length; i++) {
		iconos[i].addEventListener("click", () => {
			// Pausa o flechas
			if (i==0 || i==1 || i==3) {
				clearInterval(loop);
				contenedor.style.transitionDuration = '0s'
				iconos[1].classList.add("ocultar")
				iconos[2].classList.remove("ocultar")
			}
			// Flecha izquierda
			if (i == 0) {
				secuencia = -parseInt(contenedor.style.transform.slice(11,-3))/ancho
				secuencia = secuencia - 1
				//secuencia == 0 ?  : ""
				margen = secuencia * ancho
				contenedor.style.transform = 'translateX(-' + margen + 'px)'
			}
			// Play
			if (i == 2) {
				iconos[1].classList.remove("ocultar");
				iconos[2].classList.add("ocultar");
				loop = setInterval(slider, duracionLoop)
			} 
			// Flecha derecha
			if (i == 3 ) {
				secuencia = -parseInt(contenedor.style.transform.slice(11,-3))/ancho
				secuencia == 3 ? (secuencia =  -1) : ""
				secuencia = secuencia + 1
				margen = secuencia * ancho
				contenedor.style.transform = 'translateX(-' + margen + 'px)'
			}
		})
	}
})
