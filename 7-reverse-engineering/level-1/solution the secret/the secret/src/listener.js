import { turnBlack, turnTransparent } from "./handler.js";
import { OUT_EVENT, OVER_EVENT } from "../data/constants.js";

export const hoverListener = (element) => {
    element.addEventListener(OVER_EVENT, turnBlack);
    element.addEventListener(OUT_EVENT, turnTransparent);
};