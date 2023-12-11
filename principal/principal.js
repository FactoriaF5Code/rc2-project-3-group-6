let audio1 = document.querySelector(".audio1");
let audio2 = document.querySelector(".audio2");
let audio3 = document.querySelector(".audio3");
let audio4 = document.querySelector(".audio4");

document.addEventListener('mousemove', function(event) {
    if (audio1.paused) {
      audio1.play();
    }
    if (audio2.paused) {
        audio2.play();
      }
    if (audio3.paused) {
        audio3.play();
      }
    if (audio4.paused) {
        audio4.play();
      }
  });

let boton1 = document.querySelector(".boton1");
let personaje1 = document.querySelector(".funko1");


boton1.onclick = function () {
  personaje1.classList.toggle("bailar");
  if (audio1.muted) {
    audio1.muted = false;
  } else {
    audio1.muted = true;
  }
};

let boton2 = document.querySelector(".boton2");
let personaje2 = document.querySelector(".funko2");


boton2.onclick = function () {
  personaje2.classList.toggle("bailar");
  if (audio2.muted) {
    audio2.muted = false;
  } else {
    audio2.muted = true;
  }
};

let boton3 = document.querySelector(".boton3");
let personaje3 = document.querySelector(".funko3");


boton3.onclick = function () {
  personaje3.classList.toggle("bailar");
  if (audio3.muted) {
    audio3.muted = false;
  } else {
    audio3.muted = true;
  }
};

let boton4 = document.querySelector(".boton4");
let personaje4 = document.querySelector(".funko4");


boton4.onclick = function () {
  personaje4.classList.toggle("bailar");
  if (audio4.muted) {
    audio4.muted = false;
  } else {
    audio4.muted = true;
  }
};
