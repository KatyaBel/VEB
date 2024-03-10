import initHeader from "../components/initHeader.js";
import initHero from "../components/initHero.js";
import initBrands from "../components/initBrands.js";
import initWhat from "../components/initWhat.js";
import initFuture from "../components/initFuture.js";
import initExpect from "../components/initExpect.js";
import initSign from "../components/initSign.js";
import initArticles from "../components/initArticles.js";
import initFooter from "../components/initFooter.js";
import initBurger from "../components/initBurger.js";

const initHomePage = (element) => {
    const template = `
        <div class="nav"></div>
        <div class="hero"></div>
        <div class="brands"></div>
        <div class="what"></div>
        <div class="future"></div>
        <div class="expect"></div>
        <div class="sign"></div>
        <div class="articles"></div>
        <div class="footer"></div>
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
    initExpect(page);
    initSign(page);
    initArticles(page);
    initFooter(page);
    initBurger();
}
export default homePage;