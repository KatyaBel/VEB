import {futureTemplate} from "../templates/futureTemplate.js";
import {futureData} from "../../mockData/futureData.js";

const initFuture = (element) => {
    const futureNode = element.querySelector(".future");
    futureNode.insertAdjacentHTML("beforeend", futureTemplate(futureData));
};
export default initFuture;