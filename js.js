var preguntas = document.querySelectorAll(".pregunta");
var respuestas = document.querySelectorAll(".respuesta");

for (var i = 0; i < preguntas.length; i++) {
  preguntas[i].addEventListener("click", function () {
    var respuesta = this.nextElementSibling;
    var estabaAbierta = respuesta.classList.contains("abierta");

    for (var j = 0; j < respuestas.length; j++) {
      respuestas[j].classList.remove("abierta");
    }

    if (estabaAbierta == false) {
      respuesta.classList.add("abierta");
    }
  });
}
