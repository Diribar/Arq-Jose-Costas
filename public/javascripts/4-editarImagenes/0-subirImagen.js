window.addEventListener("load", () => {
	let inputImagen = document.querySelectorAll(".td_imagen input");
	let extensionesOK = [".jpg", ".png", ".gif", ".bmp"];
	for (let i=0; i<inputImagen.length; i++) {
		inputImagen[i].addEventListener("change", (e) => {
			texto=inputImagen[i].value
			nombre=texto.slice(texto.lastIndexOf("\\")+1)
			ext=texto.slice(texto.length-4)
			if (extensionesOK.includes(ext)) {
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
		});
	}
});
