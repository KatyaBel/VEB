import {whatTemplate} from "../templates/whatTemplate.js";
import {whatData} from "../../mockData/whatData.js";

const initWhat = (element) => {
    const whatNode = element.querySelector(".what");
    whatNode.insertAdjacentHTML("beforeend", whatTemplate(whatData));
};
export default initWhat;