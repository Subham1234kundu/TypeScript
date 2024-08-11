interface User {
    readonly dbID:number,
    email:string,
    userID:number,
    googleID?:number,
    // startTrial:()=>string,
    startTrial():string,
    getCoupn(coupnName:string,value:number):number
}

interface User {
    gitTocket:string,
}
interface Admin extends User{
    role:"admin"|"ta"|"lerner"
}

const subham: Admin = {dbID:22,email:"h@.com",userID:1234,startTrial:()=>{
    return "Trial started";
},
getCoupn:(name:"hjdgsbhujf",off:11)=>{
    return 10;
},gitTocket:"sdfbhvjbhj",
role:"admin", 
};
subham.email="s@sx.com"

