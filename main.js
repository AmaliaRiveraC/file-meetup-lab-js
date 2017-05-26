//DOM terrible
function publicar() {
  var areaTexto = document.getElementById("texto");
  var publicaciones = document.getElementById("publicaciones");
  var texto = areaTexto.value;
  var parrafo = document.createElement("p");
  parrafo.textContent = texto;
  publicaciones.appendChild(parrafo);// crea tantos textos como se envien desde el textarea hacia otra seccion del doc
  areaTexto.value = " ";//limpiamos lo que escribe el usuario 
}

function subirFoto(elemento) {
  var reader = new FileReader();
  reader.onload = function () {
  var imagenUsuario = document.getElementById("imagen-usuario");
  imagenUsuario.src = reader.result;
}
  reader.readAsDataURL(elemento.files[0]);
}


