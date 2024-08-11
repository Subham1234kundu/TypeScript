"use strict";
// class User {
//     name:string
//     private email:string
//     readonly city:string = "kolkata"
//     constructor(name:string,email:string){
//         this.email=email;
//         this.name=name;
//         this.city
//     }
// }
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this._courseCount = 1;
        this.city = "kolkata";
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 0) {
            throw new Error("Course count should be greater than 0");
        }
        this._courseCount = courseNum;
    }
}
class SubUSer extends User {
    constructor() {
        super(...arguments);
        this.isFamaily = true;
    }
    changeCourseCount() {
        this._courseCount = 10;
    }
}
const subham = new User("sk", "w@gmail.com");
