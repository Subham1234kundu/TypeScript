const score: Array<number> = [];
const names:Array<string> = [];

function identityOne(val:boolean | number): boolean | number{
    return val;
}
function identityTwo(val:any):any{
    return val;
}
function identityThree<Type>(val:Type):Type{
    return val;
}
identityThree(4);




function getSearchProduct<T>(products:T[]):T{
    //do some db operations
    const myIndex = 5
    return products[myIndex];
}

const getArrowSearchProduct = <T>(products:T[]):T =>{
    const myIndex = 5
    return products[myIndex];
}


interface  DB {
    connection:string,
    username:string
}
function anotherFunction<T, U extends DB>(valOne:T, valTwo:U):object{
    return {valOne, valTwo};
}
// anotherFunction(3, {});

interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}

class Sellable<T>{
    public cart:T[] = []

    addToCart(product:T){
        this.cart.push(product );
    }
}