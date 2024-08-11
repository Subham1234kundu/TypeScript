
function createUser({name:string,age:number,isPaid:boolean}){}
let newUser = {
    name: 'John Doe',
    age: 30,
    isPaid:false
}
createUser(newUser);

function createCource():{name:string,age:number,isPaid:boolean}{
    return {name:"subham",age:22,isPaid:false}
}

type User = {
    name:string,
    age:number,
    isActive:boolean
}
function createNewUser(user:User):User{
    return {name:"",age:4,isActive:true};
}
createNewUser({name:"",age:4,isActive:true})

type Hero ={
    readonly _id:string,
    name: string,
    age: number,
    superPorerwithBackchodi?:boolean
}
let myhero: Hero ={
    _id:"12334",
    name: "spidy",
    age: 25
}

myhero.name = "bad MAN"

type cardNum ={
    cardNumber: string,
}

type cardDate = {
    cardDate: string,
}

type cardDetails = cardNum & cardDate & {
    cvv:number
}
export{}