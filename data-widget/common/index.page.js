import * as hmUI from "@zos/ui";
import * as STYLE from "zosLoader:./index.page.[pf].layout.js";

var BPM = 60;
var BreathInTimes = 1;
var BreathOutTimes = 1;
/*
perTime=((BPM/60)/(BreathInTimes+BreathOutTimes))/1000
*/

DataWidget({
    init() {},
    build() {
        this.init();
        const button = hmUI.createWidget(hmUI.widget.BUTTON, STYLE.BUTTON);
    },
    onInit() {},

    onDestroy() {},
});
