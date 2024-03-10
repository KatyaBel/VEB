export const signTemplate = function(data) {
    return `
        <div class="sign_left">
            <p class="sign_text1">
                Запросите ранний доступ
            </p>
            <p class="sign_text2">
                ${data.title}
            </p>
        </div>
        <div class="sign_right">
            <button class="btn4">${data.signButton}</button>
        </div>
    `;
}