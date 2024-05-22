import * as hmUI from "@zos/ui";
import { px } from '@zos/utils'

export const BUTTON = {
    x: (480 - 96) / 2,
    y: 120,
    text: "Hello",
    w: -1,
    h: -1,
    normal_src: "button_normal.png",
    press_src: "button_press.png",
    click_func: () => {
        console.log("button click");
    },
};
