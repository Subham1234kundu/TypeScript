"use strict";
class TAkePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex code
        return 10;
    }
}
class Instagram2 extends TAkePhoto {
    constructor(cameraMode, filter, extraFilter) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.extraFilter = extraFilter;
    }
    getSepia() {
        console.log('Sepia filter is applied');
    }
}
const hc = new Instagram2("test", "test", "dks");
hc.getReelTime();
