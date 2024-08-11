"use strict";
class Instagram {
    constructor(cameraMode, filter, brust, extraFilter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
        this.extraFilter = extraFilter;
    }
}
class YouTube {
    constructor(cameraMode, filter, brust) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
    }
    createStory() {
        console.log('Creating a story on YouTube');
    }
}
