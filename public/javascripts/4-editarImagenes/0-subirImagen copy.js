window.addEventListener("load", () => {
	let src = document.getElementById("src").innerHTML;
	let preview = document.getElementById("preview");
	document.getElementById("inputImagen").onchange = (e) => {
		preview = document.getElementById("preview");
		// Ocultar y mostrar elementos
		document.getElementById("labelImagen").classList.add("ocultar");
		mostrarImagen(preview);
	};
});

let mostrarImagen = (preview) => {
	// Creamos el objeto de la clase FileReader
	let reader = new FileReader();
	// Leemos el archivo subido y se lo pasamos a nuestro fileReader
	reader.readAsDataURL(e.target.files[0]);
	// Le decimos que cuando esté listo ejecute el código interno
	reader.onload = (preview) => {
		image = document.createElement("img");
		image.src = reader.result;
		preview.innerHTML = "";
		preview.append(image);
	};
};
