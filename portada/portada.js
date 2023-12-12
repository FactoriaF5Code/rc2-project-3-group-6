let tiempoEspera = 10000;

function redirigir() {
  window.location.href= "/principal/principal.html";
}

setTimeout(redirigir, tiempoEspera);

let audioPortada = document.querySelector("audio");

document.addEventListener('mousemove', function() {
  audioPortada.play();

})
