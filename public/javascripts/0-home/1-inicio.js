window.addEventListener("load", () => {
	// Declarar las variables
	let contenedor = document.querySelector("#inicio #imagenes ul")
	contenedor.style.transform = 'translateX(0px)'
	let cantImagenes = document.querySelector("#inicio #cantImagenes").innerHTML;
	contenedor.style.width = cantImagenes + "00%";
	let imagenes = document.querySelectorAll("#inicio #imagenes ul li")
	let dots = document.querySelectorAll("#inicio #imagenes .dot");
	let iconos = document.querySelectorAll("#inicio #imagenes #iconos .fas");
	var transicion = '1000ms'
	let duracionLoop = 3000
	let secuencia = 1

	// Función slider
	let slider = () => {
		ancho = document.querySelector("#inicio #imagenes").offsetWidth;
		contenedor.style.transitionDuration = transicion
		secuencia = -parseInt(contenedor.style.transform.slice(11,-3))/ancho
		dots[secuencia].classList.remove("current");
		secuencia = secuencia + 1;
		margen = secuencia * ancho;
		contenedor.style.transform = 'translateX(-' + margen + 'px)'
		if (secuencia >= imagenes.length - 1) {
			setTimeout(() => {
				secuencia = 0;
				contenedor.style.transitionDuration = '0s'
				contenedor.style.transform = 'translateX(0px)'
			}, parseInt(transicion))
		}
		secuencia == imagenes.length - 2
			? iconos[3].classList.add("ocultar")
			: iconos[3].classList.remove("ocultar");
		secuencia == imagenes.length - 1
			? iconos[0].classList.add("ocultar")
			: iconos[0].classList.remove("ocultar");
		secuencia != imagenes.length - 1
			? dots[secuencia].classList.add("current")
			: dots[0].classList.add("current")
	}

	// Ejecutar
	let loop = setInterval(slider, duracionLoop)

	for (let i=0; i<iconos.length; i++) {
		iconos[i].addEventListener("click", () => {
			ancho = document.querySelector("#inicio #imagenes").offsetWidth;
			contenedor.style.transitionDuration = transicion;
			// Pausa o flechas => mostrar 'Play'
			if (i==0 || i==1 || i==3) {
				clearInterval(loop);
				iconos[1].classList.add("ocultar")
				iconos[2].classList.remove("ocultar")
			}
			// Flecha izquierda
			if (i == 0) {
				secuencia = -parseInt(contenedor.style.transform.slice(11,-3))/ancho
				dots[secuencia].classList.remove("current");
				secuencia = secuencia - 1
				dots[secuencia].classList.add("current");
				margen = secuencia * ancho
				contenedor.style.transform = 'translateX(-' + margen + 'px)'
			}
			// Play => mostrar 'Pause'
			if (i == 2) {
				iconos[1].classList.remove("ocultar");
				iconos[2].classList.add("ocultar");
				loop = setInterval(slider, duracionLoop)
			} 
			// Flecha derecha
			if (i == 3 ) {
				secuencia = -parseInt(contenedor.style.transform.slice(11,-3))/ancho
				dots[secuencia].classList.remove("current");
				secuencia = secuencia + 1
				secuencia == cantImagenes ? (secuencia = 0) : "";
				dots[secuencia].classList.add("current");
				margen = secuencia * ancho
				contenedor.style.transform = 'translateX(-' + margen + 'px)'
			}
			secuencia == 0
				? iconos[0].classList.add("ocultar")
				: iconos[0].classList.remove("ocultar");
			secuencia == imagenes.length - 2
				? iconos[3].classList.add("ocultar")
				: iconos[3].classList.remove("ocultar");
		})
	}
})
