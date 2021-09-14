window.addEventListener("load", () => {
	// Variables generales
	let cff = document.querySelectorAll("#cff");
	let clf = document.querySelectorAll("#clf");
	let filas = document.querySelectorAll(".filas");
	let IDs = document.querySelectorAll(".filas #id");
	let ne = document.querySelectorAll(".filas input[name='ne']");
	let ts = document.querySelectorAll(".filas input[name='ts']");
	let scff = document.querySelectorAll(".filas select[name='cff']");
	let sclf = document.querySelectorAll(".filas select[name='clf']");
	let ocff = document.querySelectorAll(".filas select[name='cff'] option");
	let oclf = document.querySelectorAll(".filas select[name='clf'] option");

	// Cambiar los colores de las filas
	for (let i = 0; i < filas.length; i++) {
		id = IDs[i].innerHTML;
		filas[i].style.backgroundColor = cff[i].innerHTML;
		filas[i].style.color = clf[i].innerHTML;
		ne[i].style.color = clf[i].innerHTML;
		ts[i].style.color = clf[i].innerHTML;
		scff[i].style.color = clf[i].innerHTML;
		sclf[i].style.color = clf[i].innerHTML;
		bloque = ocff.length / filas.length;
		registroBase = bloque * i;
		for (let j = 0; j < bloque; j++) {
			dato = registroBase + j;
			ocff[dato].style.backgroundColor = cff[i].innerHTML;
			oclf[dato].style.backgroundColor = cff[i].innerHTML;
		}
	}
});
