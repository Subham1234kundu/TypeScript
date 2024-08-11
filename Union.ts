let score: number | string = 33;
score:"55";

type User ={
    name: string,
    id: number,
    
}
type Admin = {
    username: string,
    id:number
    
};
let user1: User | Admin = {name:"sk",id:333};
user1 = {username:"hc",id:333};

function getDBid(id:number|string){
  if(typeof id === "string"){
    id.toLowerCase();
  }
}
getDBid(4);
getDBid("3");

let pi:3.14 = 3.14;
pi= 3.14;

//with array
const data: (number | string)[] = [1,"3",3]