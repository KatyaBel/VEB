import initHeader from "../components/initHeader.js";
import initHero from "../components/initHero.js";
import initBrands from "../components/initBrands.js";
import initWhat from "../components/initWhat.js";
import initFuture from "../components/initFuture.js";
import initBurger from "../components/initBurger.js";

const initHomePage = (element) => {
    const template = `
        <div class="nav"></div>
        <div class="hero"></div>
        <div class="brands"></div>
        <div class="what"></div>
        <div class="future"></div>
        <div class="expect">
            <div class="expect_ins">
                <div class="expect_left">
                    <img src="img/feature.png" alt="">
                </div>
                <div class="expect_right">
                    <p class="text2 link">Запроси ранний доступ</p>
                    <p class="text1">Превосходя все ожидания</p>
                    <p class="card_p">Однако кровать для помощи в путешествии неприятна. Не мысли все осуществляют
                        благословение.
                        Снисхождение ко всему, радость, изменение бурной привязанности. Вечеринку мы лет на заказ разрешили.
                    </p>
                    <p class="text2">Запросить ранний доступ</p>
                </div>
            </div>
        </div>
        <div class="sign">
            <div class="sign_left">
                <p class="sign_text1">
                    Запросите ранний доступ
                </p>
                <p class="sign_text2">
                    Зарегистрируйтесь и начните исследовать безграничные возможности.
                </p>
            </div>
            <div class="sign_right">
                <button class="btn4">Начать</button>
            </div>
        </div>
        <div class="articles">
            <p class="text1">Многое Происходит, Мы Ведем об Этом Блог.</p>
            <div class="articles_content">
                <div class="card card_main">
                    <img src="img/articles/1.png" alt="">
                        <div class="card_content">
                            <p class="card_t">Сент 26, 2021</p>
                            <p class="card_h">GPT-3 и Openai – это будущее. Давайте разберемся, как это?</p>
                            <p class="card_t card_read link">Читать полную статью</p>
                        </div>
                </div>
                <div class="article_1">
                    <div class="card">
                        <img src="img/articles/2.png" alt="">
                            <div class="card_content">
                                <p class="card_t">Сент 26, 2021</p>
                                <p class="card_h">GPT-3 и Openai – это будущее. Давайте разберемся, как это?</p>
                                <p class="card_t link">Читать полную статью</p>
                            </div>
                    </div>
                    <div class="card">
                        <img src="img/articles/3.png" alt="">
                            <div class="card_content">
                                <p class="card_t">Сент 26, 2021</p>
                                <p class="card_h">GPT-3 и Openai – это будущее. Давайте разберемся, как это?</p>
                                <p class="card_t link">Читать полную статью</p>
                            </div>
                    </div>
                </div>
                <div class="article_2">
                    <div class="card">
                        <img src="img/articles/4.png" alt="">
                            <div class="card_content">
                                <p class="card_t">Сент 26, 2021</p>
                                <p class="card_h">GPT-3 и Openai – это будущее. Давайте разберемся, как это?</p>
                                <p class="card_t link">Читать полную статью</p>
                            </div>
                    </div>
                    <div class="card">
                        <img src="img/articles/5.png" alt="">
                            <div class="card_content">
                                <p class="card_t">Сент 26, 2021</p>
                                <p class="card_h">GPT-3 и Openai – это будущее. Давайте разберемся, как это?</p>
                                <p class="card_t link">Читать полную статью</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <p class="text1">Хотите Шагнуть в Будущее Раньше Других?</p>
            <button class="btn5">Запросить ранний доступ</button>
            <div class="footer_bottom">
                <div class="logo">
                    <img src="img/logo.svg" alt="">
                        <p class="footer_text2">ул. Профессора Поздеева, 13, к.Г, Пермь, Пермский край, 614013 Все права
                            защищены</p>
                </div>
                <div class="card">
                    <p class="footer_text1">Ссылки</p>
                    <p class="footer_text2 link">Овероны</p>
                    <p class="footer_text2 link">Соц. сети</p>
                    <p class="footer_text2 link">Счетчики</p>
                    <p class="footer_text2 link">Контакты</p>
                </div>
                <div class="card">
                    <p class="footer_text1">Компания</p>
                    <p class="footer_text2 link">Условия использования</p>
                    <p class="footer_text2 link">Перс. данные</p>
                    <p class="footer_text2 link">Конаткты</p>
                </div>
                <div class="card">
                    <p class="footer_text1">Контакты</p>
                    <p class="footer_text2">ул. Профессора Поздеева, 13, к.Г, Пермь</p>
                    <p class="footer_text2">+7 (342) 2-198-520</p>
                    <p class="footer_text2">info@pstu.ru</p>
                </div>
            </div>
        </div>
        <p class="footer_text2" style="text-align: center; margin: 0">© 2023 GPT-3. Все права защищены.</p>
    `;
    element.insertAdjacentHTML("beforeend", template);
};

const homePage = function() {
    const page = document.querySelector(".page");
    initHomePage(page);
    initHeader(page);
    initHero(page);
    initBrands(page);
    initWhat(page);
    initFuture(page);
    initBurger();
}
export default homePage;