import {signTemplate} from "../templates/signTemplate.js";
import {signData} from "../../mockData/signData.js";

const initSign = (element) => {
    const signNode = element.querySelector(".sign");
    signNode.insertAdjacentHTML("beforeend", signTemplate(signData));
};
export default initSign;