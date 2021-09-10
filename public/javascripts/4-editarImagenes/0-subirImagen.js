window.addEventListener("load", () => {
	let inputImagen = document.querySelectorAll("#inputImagen");
	console.log(inputImagen[1]);
	for (let i = 1; i < inputImagen.length; i++) {
		inputImagen[i].addEventListener("change", (e) => {
			console.log(i);
			// Creamos el objeto de la clase FileReader
			let reader = new FileReader();
			// Leemos el archivo subido y se lo pasamos a nuestro fileReader
			reader.readAsDataURL(e.target.files[0]);
			// Le decimos que cuando esté listo ejecute el código interno
			reader.onload = () => {
				preview = document.querySelectorAll("#preview");
				console.log[preview];
				image = document.createElement("img");
				image.src = reader.result;
				preview[i].innerHTML = "";
				preview[i].append(image);
			};
		});
	}
});
