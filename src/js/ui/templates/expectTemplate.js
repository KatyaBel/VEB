export const expectTemplate = function(data) {
    return `
        <div class="expect_ins">
            <div class="expect_left">
                <img src="${data.illustration.src}" alt="${data.illustration.alt}">
            </div>
            <div class="expect_right">
                <p class="text2 link">Запроси ранний доступ</p>
                <p class="text1">
                    ${data.header}
                </p>
                <p class="card_p">
                    ${data.description}
                </p>
                <p class="text2">Запросить ранний доступ</p>
            </div>
        </div>
    `;
}