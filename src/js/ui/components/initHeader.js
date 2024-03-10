import {headerTemplate} from "../templates/headerTemplate.js";
import {headerData} from "../../mockData/headerData.js";

const initHeader = (element) => {
    const headerNode = element.querySelector(".nav");
    headerNode.insertAdjacentHTML("beforeend", headerTemplate(headerData));
};
export default initHeader;