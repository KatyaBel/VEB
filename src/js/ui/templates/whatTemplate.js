export const createCardTemplate = function (card) {
    return `
        <div class="card">
            <img src="img/line.png" alt="">
            <p class="card_h">
                ${card.header}
            </p>
            <p class="card_p">
                ${card.content}
            </p>
        </div>
    `;
}
export const whatTemplate = function(data) {
    const cardsTemplate = data.whatBottomData.map((card) => createCardTemplate(card)).join('');
    return `
        <div class="what_ins">
            <div class="what_top">
                <div class="card_h">
                    <img class="line_img" src="img/line.png" alt="">
                    <p style="margin-bottom: 20px">${data.whatTopData.header}</p>
                </div>
                <div class="card_p">
                    <p>
                        ${data.whatTopData.content}
                    </p>
                </div>
            </div>
            <div class="what_middle">
                <p class="text1">
                    ${data.whatMiddleData.header}
                </p>
                <a class="text2" href="${data.whatMiddleData.button.href}">
                    ${data.whatMiddleData.button.title}
                </a>
            </div>
            <div class="what_bottom">
                ${cardsTemplate} 
            </div>
        </div>
    `;
}