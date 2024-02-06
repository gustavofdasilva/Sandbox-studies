"use strict";
class TakePhoto {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst, likes) {
        super(cameraMode, filter, burst);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.likes = likes;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const hc = new Instagram("Portrait", "B&W", 5, 10);
