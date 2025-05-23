class Resistor{
    readonly width: number=150;
    readonly height: number=40;
    protected parent:SeriesCircuit;
    constructor(protected r:number, protected name:string){
    }
    getResistance(){return this.r;}
    setParent(p:SeriesCircuit){
        this.parent=p;
    }
    draw(g, startx:number, y:number){
        g.clearRect(startx, y-this.height/2, this.width+20, this.height);
        g.beginPath();
        g.moveTo(startx, y);
        g.lineTo(startx+this.width/4, y);
        g.rect(startx+this.width/4, y-10, this.width/2, 20);
        g.fillText(this.name + "   " + this.r+ " Ω", startx+this.width/4+5, y+2);
        g.moveTo(startx+this.width*3/4, y);
        g.lineTo(startx+this.width, y);
        g.stroke();
     }
     getWidth(){return this.width;}
     getR(){return this.r;}
     setR(r: number){
         this.r=r;
         if(this.parent){
             this.parent.draw();
             
}}}

class SeriesCircuit{
    protected resistors: Resistor[]=[];
    protected width: number=0;
    constructor(protected g, protected startx: number, protected y: number){
    }
    push(r: Resistor){
       this.resistors.push(r);
       this.width+=r.getWidth();
       r.setParent(this);
       this.draw();
    }  
    draw(){
        this.g.clearRect(0, this.y-20, this.width, 40);
        let x=this.startx;
        this.g.beginPath();
        this.g.moveTo(x, this.y);
        x+=5;
        this.g.lineTo(x, this.y);
        this.g.stroke()
        let areaStartX=x;
        for(let i=0; i<this.resistors.length; i++){
          this.resistors[i].draw(this.g, x, this.y);
          x+=this.resistors[i].getWidth();
        }
        this.g.strokeStyle="lightgray";
        this.g.beginPath();
        this.g.rect(areaStartX, this.y-20, x-areaStartX, 40);
        this.g.stroke();
        
        for(let i=0; i<this.resistors.length; i++){
        if (this.resistors[i].getR() > 500) {
        this.g.strokeStyle="brown";}
        else{
            this.g.strokeStyle="black";
        }
        this.g.beginPath();
        this.g.moveTo(x, this.y);
        x+=5;
        this.g.lineTo(x, this.y);
        this.g.stroke()
        this.g.fillText(this.getR()+ " Ω"+ "   "+ this.biggestR()+" Ω", this.startx+this.width/2-10, this.y+20)
    }
}
    getR(){
        let result:number=0
        for (let r of this.resistors){
            result+=r.getR()
        }
        return result;}
    biggestR(){
        let result:number = 0
        const list:number[] = [];
        for(let i=0; i<this.resistors.length; i++){
        list.push(this.resistors[i].getR())
    }
    return Math.max.apply(null,list)
}
}