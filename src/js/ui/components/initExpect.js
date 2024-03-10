import {expectTemplate} from "../templates/expectTemplate.js";
import {expectData} from "../../mockData/expectData.js";

const initExpect = (element) => {
    const expectNode = element.querySelector(".expect");
    expectNode.insertAdjacentHTML("beforeend", expectTemplate(expectData));
};
export default initExpect;