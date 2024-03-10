export const createCardTemplate = function (card) {
    let cardTemplate = ``
    for(let i = 0; i < card.links.length; i++) {
        cardTemplate += `
            <p class="footer_text2${card.title !== 'Контакты' ? " link" : ""}">
                ${card.links[i].content}
            </p>
        `
    }
    return `
        <div class="card">
            <p class="footer_text1">
                ${card.title}
            </p>
            ${cardTemplate}
        </div>
    `
}
export const footerTemplate = function(data) {
    let count = data.cardsData.length
    let cardsTemplate = ``
    for(let i = 0; i < count; i++) {
        cardsTemplate += `${createCardTemplate(data.cardsData[i])}`
    }
    return `
        <p class="text1">
            ${data.title}
        </p>
        <button class="btn5">
            ${data.footerButton}
        </button>
        <div class="footer_bottom">
            <div class="logo">
                <img src="${data.logoData.src}" alt="${data.logoData.alt}">
                    <p class="footer_text2">
                        ${data.locationData}
                    </p>
            </div>
            ${cardsTemplate}
        </div>
    `;
}