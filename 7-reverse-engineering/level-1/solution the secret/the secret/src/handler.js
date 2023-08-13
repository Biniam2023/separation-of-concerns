import { changeElementColor } from "./utils.js";

export const turnBlack = (event) => {
    changeElementColor(event.target, 'black');
};

export const turnTransparent = (event) => {
    changeElementColor(event.target, 'transparent');
};