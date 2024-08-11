"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var string = _a.name, number = _a.age, boolean = _a.isPaid;
}
var newUser = {
    name: 'John Doe',
    age: 30,
    isPaid: false
};
createUser(newUser);
function createCource() {
    return { name: "subham", age: 22, isPaid: false };
}
function createNewUser(user) {
    return { name: "", age: 4, isActive: true };
}
createNewUser({ name: "", age: 4, isActive: true });
var myhero = {
    _id: "12334",
    name: "spidy",
    age: 25
};
myhero.name = "bad MAN";
