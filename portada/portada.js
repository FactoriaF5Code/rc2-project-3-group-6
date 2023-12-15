let tiempoEspera = 10000;

function redirigir() {
  window.location.href = "https://factoriaf5code.github.io/rc2-project-3-group-6/principal/principal.html";
}

setTimeout(redirigir, tiempoEspera);

let audioPortada = document.querySelector("audio");

document.addEventListener("mousemove", function () {
  audioPortada.play();
});
