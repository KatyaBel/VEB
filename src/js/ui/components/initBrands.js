import {brandsTemplate} from "../templates/brandsTemplate.js";
import {brandsData} from "../../mockData/brandsData.js";

const initBrands = (element) => {
    const brandsNode = element.querySelector(".brands");
    brandsNode.insertAdjacentHTML("beforeend", brandsTemplate(brandsData));
};
export default initBrands;