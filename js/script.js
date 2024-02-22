//сразу при загрузке страницы
window.onload = function() {
    updateState()
};
//при ресайзе
window.addEventListener('resize', function() {
    updateState()
});
//функция для кнопки-бургер
function openMenu() {
    let button_open = document.getElementById('open');
    let button_close = document.getElementById('close');
    let menu = document.getElementById('my_menu');
    button_open.style.display = 'none';
    button_close.style.display = 'block';
    menu.style.display = 'flex';
}
//функция для крестика
function closeMenu() {
    let button_open = document.getElementById('open');
    let button_close = document.getElementById('close');
    let menu = document.getElementById('my_menu');
    button_open.style.display = 'block';
    button_close.style.display = 'none';
    menu.style.display = 'none';
}
//проверка размера окна
function updateState() {
    const width = window.innerWidth;
    let button_open = document.getElementById('open');
    let button_close = document.getElementById('close');
    let menu = document.getElementById('my_menu');
    if (width >= 768) {
        button_open.style.display = 'none';
        button_close.style.display = 'none';
        menu.style.display = 'flex';
    } else {
        button_open.style.display = 'block';
        button_close.style.display = 'none';
        menu.style.display = 'none';
    }
}
