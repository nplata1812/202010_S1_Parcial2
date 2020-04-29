
export class Practica {



  constructor(private idA: number, private pName:String, private pChannel:String ,
    private pSeasons:Number){}

get id():number{return this.idA;}
get name():String { return this.pName;}
get channel():String {return this.pChannel;}
get seasons():Number {return this.pSeasons;}  }


