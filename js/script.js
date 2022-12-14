const meuNome = document.querySelector(".meu-nome");

// Maquina de escrever
function typeWriter(elemento) {
    const textArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textArray.forEach(async (letra, index) => {
        setTimeout(() => {
            elemento.innerHTML += letra
        }, 150 * index)
    })
}

typeWriter(meuNome);

// Menu mobile
const menuMobile = document.querySelector(".menu-mobile");

function toggleMenu(e) {
    if (e.type === "touchstart") e.preventDefault();
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    e.currentTarget.setAttribute("aria-expanded", active);
}

menuMobile.addEventListener("click", toggleMenu);
menuMobile.addEventListener("touchstart", toggleMenu);