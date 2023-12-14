document.addEventListener("DOMContentLoaded", () => {
  const audioFiles = {
    bateria: "bateria01",
    bajo: "bajo01",
    melodia: "melodia01",
    vocales: "vocales01",
  };

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const audioSources = {};

  async function playAudio(fileName) {
    const filePath = `/audios/${fileName}.mp3`;

    const response = await fetch(filePath);
    const buffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(buffer);

    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;

    source.gainNode = audioContext.createGain();
    source.gainNode.gain.value = 0; // Iniciar muteado
    source.connect(source.gainNode);
    source.gainNode.connect(audioContext.destination);

    source.loop = true; // Habilitar el bucle

    return source;
  }

  async function init() {
    for (const key in audioFiles) {
      audioSources[key] = await playAudio(audioFiles[key]);
    }
  }

  function startAll() {
    for (const key in audioFiles) {
      audioSources[key].start(0);
    }
  }

  function stopAll() {
    for (const key in audioFiles) {
      const gainNode = audioSources[key].gainNode;
      gainNode.gain.value = 0; // Mute todas las pistas
    }
  }

  function toggleVolume(key) {
    const gainNode = audioSources[key].gainNode;
    gainNode.gain.value = 1 - gainNode.gain.value; // Toggle mute/desmute para la pista específica
  }

  init();

  // Al hacer clic en cualquier lugar de la página, intenta iniciar todos los audios
  document.body.addEventListener("click", () => {
    startAll();
  });

  // Agrega los eventos de clic a los botones para ajustar el volumen
  document
    .querySelector(".boton1")
    .addEventListener("click", () => toggleVolume("bateria"));
  document
    .querySelector(".boton2")
    .addEventListener("click", () => toggleVolume("bajo"));
  document
    .querySelector(".boton3")
    .addEventListener("click", () => toggleVolume("melodia"));
  document
    .querySelector(".boton4")
    .addEventListener("click", () => toggleVolume("vocales"));
  document
    .querySelector(".boton5")
    .addEventListener("click", () => toggleVolume("bateria"));
  document
    .querySelector(".boton6")
    .addEventListener("click", () => toggleVolume("bajo"));
  document
    .querySelector(".boton7")
    .addEventListener("click", () => toggleVolume("melodia"));
  document
    .querySelector(".boton8")
    .addEventListener("click", () => toggleVolume("vocales"));
  

  // Detiene la reproducción al cerrar la ventana o cambiar de pestaña
  window.addEventListener("beforeunload", () => {
    stopAll();
  });

  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "a":
        toggleVolume("bateria");
        aBailar(personaje1);
        break;
      case "s":
        toggleVolume("bajo");
        aBailar(personaje2);
        break;
      case "d":
        toggleVolume("melodia");
        aBailar(personaje3);
        break;
      case "f":
        toggleVolume("vocales");
        aBailar(personaje4);
        break;
    }
  });
});

let boton1 = document.querySelector(".boton1");
let personaje1 = document.querySelector(".funko1");

let boton2 = document.querySelector(".boton2");
let personaje2 = document.querySelector(".funko2");

let boton3 = document.querySelector(".boton3");
let personaje3 = document.querySelector(".funko3");

let boton4 = document.querySelector(".boton4");
let personaje4 = document.querySelector(".funko4");
let boton5 = document.querySelector(".boton5");
let boton6 = document.querySelector(".boton6");
let boton7 = document.querySelector(".boton7");
let boton8 = document.querySelector(".boton8");

function aBailar(elemento) {
  elemento.classList.toggle("bailar");
}

boton1.onclick = function () {
  aBailar(personaje1);
};

boton2.onclick = function () {
  aBailar(personaje2);
};

boton3.onclick = function () {
  aBailar(personaje3);
};

boton4.onclick = function () {
  aBailar(personaje4);
};
boton5.onclick = function () {
  aBailar(personaje1);
};

boton6.onclick = function () {
  aBailar(personaje2);
};

boton7.onclick = function () {
  aBailar(personaje3);
};

boton8.onclick = function () {
  aBailar(personaje4);
};
