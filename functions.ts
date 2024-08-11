function addTwo(num: number):number{
    return num + 2;
};
function getUpperCase(val:string){
    return val.toUpperCase();
};

let loginUser = ( name: string, mail:string,isPaid:boolean = false)=>{}
loginUser("h","j@.comf");
let myValue = addTwo(5);
getUpperCase("hello");

const heros = ["spidy", "ironman" ,"djdoom"];
heros.map((hero):string =>{
    return `hero is ${hero}`
});

// this is not good way to throw errors in ts 
function consoleError (errMsg:string):void{
    console.error(errMsg);
}

// use never and throw the error msg in typescript
function hanndleError (errMsg: string):never{
    throw new Error(errMsg);
}


export{};