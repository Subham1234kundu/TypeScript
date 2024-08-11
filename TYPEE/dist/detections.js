"use strict";
//typeOF
function detectType(val) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 1;
}
function isAdminAccunt(accunt) {
    if ('isAdmin' in accunt) {
        return accunt.isAdmin;
    }
}
//instanceof
function logVal(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius * 2;
    }
    // else{
    //     return shape.sideLength * 2
    // }
}
//nevertype
function getAre(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * 2;
        case "square":
            return shape.sideLength * 2;
        case "rectangle":
            return shape.width * shape.height;
        default:
            const _defaultShape = shape;
            return _defaultShape;
    }
}
