const hamburguer = document.querySelector(".hamburguer")
const menu = document.querySelector(".menu-desktop")

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active")
    menu.classList.toggle("active")
})