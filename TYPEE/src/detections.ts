//typeOF
function detectType(val:number | string){
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val+1;
}


//in
interface User {
    name:string,
    age:number
}
interface Admin{
    name:string,
    age:number,
    isAdmin:boolean;
}

function isAdminAccunt(accunt:User|Admin){
    if ('isAdmin' in accunt) {
        return accunt.isAdmin;
    }

}

//instanceof
function logVal(x:Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }
    else{
        console.log(x.toUpperCase());
    }
}

//as  is
type Fish = {swim:()=>void};
type Bird = {fly:()=>void};
function isFish(pet:Fish | Bird):pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet:Fish|Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    }else{
        return "bird food"
    }
}




//unons
interface Circle{
    kind:"circle",
    radius:number
}
interface Square{
    kind:"square",
    sideLength:number
}
interface Rectangle{
    kind:"rectangle",
    width:number,
    height:number
}
type Shape = Circle|Square|Rectangle
function getTrueShape(shape:Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius * 2
    }
    // else{
    //     return shape.sideLength * 2
    // }

}

//nevertype
function getAre(shape:Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius * 2
            case "square":
                return shape.sideLength * 2
            case "rectangle":
                return shape.width * shape.height
                default:
                    const _defaultShape:never = shape;
                    return _defaultShape
    }
}



