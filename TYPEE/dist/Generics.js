"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(4);
function getSearchProduct(products) {
    //do some db operations
    const myIndex = 5;
    return products[myIndex];
}
const getArrowSearchProduct = (products) => {
    const myIndex = 5;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return { valOne, valTwo };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
