import {SECRET_HOLDER, SECRET} from "../data/constants.js";
import { hoverListener } from "./listener.js";
import { changeElementColor } from "./utils.js";

// SET STARTUP SCREEN
const secretHolder = document.getElementById(SECRET_HOLDER);
secretHolder.innerText = SECRET;
changeElementColor(secretHolder, 'transparent');

//LISTEN TO HOVERING
hoverListener(secretHolder);