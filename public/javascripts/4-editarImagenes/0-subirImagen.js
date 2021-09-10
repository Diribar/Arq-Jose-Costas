window.addEventListener("load", () => {
	let src = document.querySelectorAll("#src");
	
	document.getElementById("inputImagen").onchange = (e) => {
		// Ocultar y mostrar elementos
		document.getElementById("labelImagen").classList.add("ocultar");
		mostrarImagen(e);
	};
});

let mostrarImagen = (e) => {
	// Creamos el objeto de la clase FileReader
	let reader = new FileReader();
	// Leemos el archivo subido y se lo pasamos a nuestro fileReader
	reader.readAsDataURL(e.target.files[0]);
	// Le decimos que cuando esté listo ejecute el código interno
	reader.onload = () => {
		let preview = document.getElementById("preview");
		image = document.createElement("img");
		image.src = reader.result;
		preview.innerHTML = "";
		preview.append(image);
	};
};