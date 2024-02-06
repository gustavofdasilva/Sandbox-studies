abstract class TakePhoto { //Blueprint to other classes, we cant create a object of a abstract class, but we can use this class as extends in other normal class
    constructor(
        public cameraMode: string,
        public filter: string, 
        public burst: number
    ) {}

    
    abstract getSepia():void 
    
    getReelTime():number {
        return 2
    }
}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public likes: number
    ) {
        super(cameraMode,filter,burst)
    }
    getSepia(): void {
        console.log("Sepia")
    }
}

const hc = new Instagram(
    "Portrait",
    "B&W",
    5,
    10,
)

hc.getReelTime