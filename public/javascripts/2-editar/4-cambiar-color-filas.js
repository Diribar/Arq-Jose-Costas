window.addEventListener("load", () => {
	filas = document.querySelectorAll(".fila");
	for (let i = 0; i < filas.length; i++) {
		cff = document.querySelector(".fila.numero" + i + " .cff").innerHTML;
		clf = document.querySelector(".fila.numero" + i + " .clf").innerHTML;
		document.querySelector(".fila.numero" + i).style.backgroundColor = cff;
		document.querySelector(".fila.numero" + i).style.color = clf;
		document.querySelector(".fila.numero" + i + " strong").style.color =
			clf;
		document.querySelectorAll(
			".fila.numero" + i + " input"
		)[0].style.color = clf;
		document.querySelectorAll(
			".fila.numero" + i + " input"
		)[1].style.color = clf;
		document.querySelectorAll(
			".fila.numero" + i + " select"
		)[0].style.color = clf;
		document.querySelectorAll(
			".fila.numero" + i + " select"
		)[1].style.color = clf;
		opciones = document.querySelectorAll(".fila.numero" + i + " option");
		for (opcion of opciones) {
			opcion.style.backgroundColor = cff;
		}
	}

});