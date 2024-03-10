export const createArticleTemplate = function (key, article) {
    return `
        <div class="card">
            <img src="${article.illustration.src}" alt="${article.illustration.alt}">
            <div class="card_content">
                <p class="card_t">
                    ${article.date}
                </p>
                <p class="card_h">
                    ${article.description}
                </p>
                <p class="card_t${key === 0 ? " card_read" : ""} link">Читать полную статью</p>
            </div>
        </div>
    `
}
export const articlesTemplate = function(data) {
    let mainCardTemplate = ``
    let cardsRightTemplate = ``
    let cardsBottomTemplate = ``
    for(let i = 0; i < data.cardsData.length; i++) {
        if (i === 0) {
            mainCardTemplate += `${createArticleTemplate(i, data.cardsData[i])}`
        }
        else if (i < 5) {
            cardsRightTemplate += `${createArticleTemplate(i, data.cardsData[i])}`
        } else {
            cardsBottomTemplate += `${createArticleTemplate(i, data.cardsData[i])}`
        }
    }
    return `
        <p class="text1">${data.title}</p>
        <div class="articles_content">
            <div class="articles_top">
                <div class="card_main">
                    ${mainCardTemplate}
                </div>
                <div class="cards_right">
                    ${cardsRightTemplate}
                </div>
            </div>
            <div class="articles_bottom">
                ${cardsBottomTemplate}
            </div>
        </div>
    `;
}