//после загрузки страницы
window.onload = function() {
    updateState()
};
//при ресайзе
window.addEventListener('resize', function() {
    updateState()
});
//показать/скрыть бургер
function updateState() {
    const width = window.screen.width;
    let button_open = document.querySelector(".burger_open")
    let button_close = document.querySelector(".burger_close")
    let menu = document.querySelector(".menu")
    if (width >= 1024) {
        button_open.classList.add("hidden")
        button_close.classList.add("hidden")
        menu.classList.remove("hidden")
    } else {
        button_open.classList.remove("hidden")
        button_close.classList.add("hidden")
        menu.classList.add("hidden")
    }
}
//функция для кнопки-бургер
function openMenu() {
    let button_open = document.querySelector(".burger_open")
    let button_close = document.querySelector(".burger_close")
    let menu = document.querySelector(".menu")
    button_open.classList.add("hidden")
    button_close.classList.remove("hidden")
    menu.classList.remove("hidden")
}
//функция для крестика
function closeMenu() {
    let button_open = document.querySelector(".burger_open")
    let button_close = document.querySelector(".burger_close")
    let menu = document.querySelector(".menu")
    button_open.classList.remove("hidden")
    button_close.classList.add("hidden")
    menu.classList.add("hidden")
}