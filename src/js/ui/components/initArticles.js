import {articlesTemplate} from "../templates/articlesTemplate.js";
import {articlesData} from "../../mockData/articlesData.js";

const initArticles = (element) => {
    const articlesNode = element.querySelector(".articles");
    articlesNode.insertAdjacentHTML("beforeend", articlesTemplate(articlesData));
};
export default initArticles;