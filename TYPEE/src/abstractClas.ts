abstract class TAkePhoto {
    constructor(
       public cameraMode:string,
       public filter:string,
       
    ){}
    abstract getSepia(): void
    getReelTime(): number{
        //some complex code
        return 10;
    }
}


class Instagram2 extends TAkePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public extraFilter:string
        
     ){
        super(cameraMode,filter);
     }
     getSepia(): void {
         console.log('Sepia filter is applied');
     }
}

const hc = new Instagram2("test","test","dks");
hc.getReelTime()