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
    protected _courseCount = 1;
    readonly city:string = "kolkata"
    constructor(public name:string,public email:string){
        
    }
    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount():number{
        return this._courseCount;
    }
    set courseCount(courseNum){
        if(courseNum<=0){
            throw new Error("Course count should be greater than 0");
        }
        this._courseCount = courseNum
    }

}
class SubUSer extends User {
    isFamaily:boolean = true
    changeCourseCount(){
        this._courseCount  = 10
    }
}

const subham = new User("sk","w@gmail.com");
