export const burgerTemplate = `
    <div class="burger_open">
        <div class="b1"></div>
        <div class="b2"></div>
        <div class="b3"></div>
    </div>
    <div class="burger_close">
        <div class="b1"></div>
        <div class="b2"></div>
        <div class="b3"></div>
    </div>
`;
export const createMenuItemTemplate = function (menuItem) {
    return `
        <li class="${menuItem.isActive ? " active" : ""}">
            ${menuItem.title}
        </li>
    `;
};
export const createButtonTemplate = function (button) {
    return `
        <button class="btn${button.isPrimary ? " btn2" : " btn1"}">${button.title}
        </button>
`;
}
export const headerTemplate = function(data) {
    const menuItemsTemplate = data.menuData.map((menuItem) => createMenuItemTemplate(menuItem)).join('');
    const buttonTemplate = data.buttonsData.map((button) => createButtonTemplate(button)).join('');
    return `
        <div class="logo_burger">
            <a class="logo" href="${data.logoData.href}">GPT-4</a>
            ${burgerTemplate}
        </div>
        <div class="menu">
            <ul>
                ${menuItemsTemplate}
            </ul>
            <div class="buttons">
                ${buttonTemplate}
            </div>
        </div>
    `;
}