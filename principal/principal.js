let boton1 = document.querySelector(".boton1");
let personaje1 = document.querySelector(".funko1");
let audio1 = document.querySelector(".audio1");

boton1.onclick = function () {
    personaje1.classList.toggle("bailar");
    audio1.toggleAttribute("muted");
}

let boton2 = document.querySelector(".boton2");
let personaje2 = document.querySelector(".funko2");

boton2.onclick = function () {
    personaje2.classList.toggle("bailar");
}

let boton3 = document.querySelector(".boton3");
let personaje3 = document.querySelector(".funko3");

boton3.onclick = function () {
    personaje3.classList.toggle("bailar");
}

let boton4 = document.querySelector(".boton4");
let personaje4 = document.querySelector(".funko4");

boton4.onclick = function () {
    personaje4.classList.toggle("bailar");
}