"use strict";

window.addEventListener("load", () => {
	let homeButton = document.querySelector("#home-button");
	let proyectosButton = document.querySelector("#proyectos-button");

	// Eventos
	homeButton.addEventListener("click", () => desplegable("menu-home"));
	proyectosButton.addEventListener("click", () => desplegable("menu-proyectos"));
	window.onclick = function (e) {
		// Cierra los dropdowns en desuso
		!e.target.matches("#home-button") && document.getElementById("menu-home").classList.add("ocultar");
		!e.target.matches("#proyectos-button") && document.getElementById("menu-proyectos").classList.add("ocultar");
	};
});

// Alternar la visibilidad de los Menús Desplegables
const desplegable = (n) => document.getElementById(n).classList.toggle("ocultar");
