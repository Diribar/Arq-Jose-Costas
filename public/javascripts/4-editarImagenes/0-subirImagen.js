window.addEventListener("load", () => {
	let inputImagen0 = document.getElementById("inputImagen0");
	let inputImagen1 = document.querySelector("#inputImagen1");
	let inputImagen2 = document.querySelector("#inputImagen2");
	inputImagen0.addEventListener("change", (e) => {mostrarImagen(e, 0)});
	inputImagen1.addEventListener("change", (e) => {mostrarImagen(e, 1)});
	inputImagen2.addEventListener("change", (e) => {mostrarImagen(e, 2)});
});

let mostrarImagen = (e, i) => {
	// Creamos el objeto de la clase FileReader
	let reader = new FileReader();
	// Leemos el archivo subido y se lo pasamos a nuestro fileReader
	reader.readAsDataURL(e.target.files[0]);
	// Le decimos que cuando esté listo ejecute el código interno
	reader.onload = () => {
		preview = document.querySelectorAll("#preview");
		image = document.createElement("img");
		image.src = reader.result;
		preview[i].innerHTML = "";
		preview[i].append(image);
	};
};
