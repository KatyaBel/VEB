import {heroTemplate} from "../templates/heroTemplate.js";
import {heroData} from "../../mockData/heroData.js";

const initHero = (element) => {
    const heroNode = element.querySelector(".hero");
    heroNode.insertAdjacentHTML("beforeend", heroTemplate(heroData));
};
export default initHero;