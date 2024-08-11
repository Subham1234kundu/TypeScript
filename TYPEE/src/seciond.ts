interface TAkePhotoo {
    cameraMode:string
    filter:string
    brust:number
}
interface Story{
    createStory():void
}
class Instagram implements TAkePhotoo{
    constructor(
        public cameraMode: string,
        public filter: string,
        public brust: number,
        public extraFilter:boolean
    ){}
}

class YouTube implements TAkePhotoo, Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public brust: number,
        
    ){}

    createStory(): void {
        console.log('Creating a story on YouTube');
    }
}