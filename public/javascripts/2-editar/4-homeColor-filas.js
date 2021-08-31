window.addEventListener("load", () => {
	let filas = document.querySelectorAll(".filas");
	let IDs = document.querySelectorAll(".filas .id");
	for (let i = 0; i < filas.length; i++) {
		id = IDs[i].innerHTML
		cff = document.querySelector(".filas.idNum" + id + " .cff").innerHTML;
		clf = document.querySelector(".filas.idNum" + id + " .clf").innerHTML;
		document.querySelector(".filas.idNum" + id).style.backgroundColor = cff;
		document.querySelector(".filas.idNum" + id).style.color = clf;
		document.querySelector(".filas.idNum" + id + " strong").style.color =
			clf;
		document.querySelectorAll(
			".filas.idNum" + id + " input"
		)[0].style.color = clf;
		document.querySelectorAll(
			".filas.idNum" + id + " input"
		)[1].style.color = clf;
		document.querySelectorAll(
			".filas.idNum" + id + " select"
		)[0].style.color = clf;
		document.querySelectorAll(
			".filas.idNum" + id + " select"
		)[1].style.color = clf;
		opciones = document.querySelectorAll(".filas.idNum" + id + " option");
		for (opcion of opciones) {
			opcion.style.backgroundColor = cff;
		}
	}

});