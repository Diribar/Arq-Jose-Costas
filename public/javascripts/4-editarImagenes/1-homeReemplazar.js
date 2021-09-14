window.addEventListener("load", () => {
	// Seleccionar partes del formulario
	let inputImagen = document.querySelectorAll(".td_imagen input[name='imagen']");
	let boton = document.querySelectorAll(".td_imagen button[type='submit']");
	// Definir los tipos de archivo válidos
	let extensionesOK = [".jpg", ".png", ".gif", ".bmp"];
	// Rutina para los inputs
	for (let i = 0; i < inputImagen.length; i++) {
		// Acciones si cambió alguna imagen
		inputImagen[i].addEventListener("change", (e) => {
			texto = inputImagen[i].value;
			nombre = texto.slice(texto.lastIndexOf("\\") + 1);
			ext = texto.slice(texto.length - 4);
			if (!extensionesOK.includes(ext)) {
				return;
			}
			mostrarImagen(e, i)
			boton[i].classList.remove("ocultar")
		});
	}
});

let mostrarImagen = (e, i) => {
	// Creamos el objeto de la clase FileReader
	reader = new FileReader();
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
}