export const createButtonTemplate = function (button) {
    switch (button.type) {
        case 'input':
            return `<input class="mail" type="text" placeholder="${button.title}">`;
        case 'button':
            return `<button class="btn3">${button.title}</button>`;
        default:
            return ``;
    }
}
export const heroTemplate = function(data) {
    const buttonTemplate = data.heroCtaButtons.map((buttonItem) => createButtonTemplate(buttonItem)).join('');
    return `
        <div class="hero_left">
            <p class="hero_top">${data.header}</p>
            <p class="hero_middle">
                ${data.description}
            </p>
            <form>
                ${buttonTemplate}
            </form>
            <div class="hero_bottom">
                <img src="img/people.png" alt="">
                <p>1,600 человек запросило доступ за последние 24 часа</p>
            </div>
        </div>
        <div class="hero_right">
            <img src="${data.illustration.src}" alt="${data.illustration.alt}">
        </div>
    `;
}