export const createCardTemplate = function (card) {
    return `
        <div class="card">
            <div class="card_h">
                <img src="img/line.png" alt="">
                <p>
                    ${card.title}
                </p>
            </div>
            <div class="card_p">
                <p>
                    ${card.description}
                </p>
            </div>
        </div>
    `;
}
export const futureTemplate = function(data) {
    const cardsTemplate = data.map((card) => createCardTemplate(card)).join('');
    return `
        <div class="future_left">
            <p class="text1">Будущее Уже наступило и Тебе Нужно Лишь Осознать. Шагни в Будущее и Воплоти Его.</p>
            <a class="text2">Запросить ранний доступ</a>
        </div>
        <div class="future_right">
            ${cardsTemplate}
        </div>
    `;
}