abstract class AbstractResistor {
    abstract getResistance():number;
}

class Resistor extends AbstractResistor{
    r: number = 0
    constructor(r:number) {
        super();
        this.r=r;
    }
    getResistance(): number {
        return this.r;
    }
}

class Switch extends AbstractResistor{
    state:boolean = false
    constructor(state:boolean) {
        super()
        this.state=state
    }
    getState():boolean {
        return this.state
    }
    setState(state: boolean){
    this.state=state;}

    getResistance(){
        if (this.state) {return 0}
        else return Infinity
    }
}
//  class SeriesCircuit extends AbstractResistor {
//     r:AbstractResistor[]=[]
//     constructor(r:AbstractResistor) {
//         super()
//         this.r=r
//     }
//     getResistance(): {
//         return r.reduce((0, element) => 0 + element);
//     }
//  }


const Massiiv:AbstractResistor[] = []

let r1: AbstractResistor = new Resistor(220)
let s1:AbstractResistor = new Switch(true)
let r2: AbstractResistor = new Resistor (110)

Massiiv.push(r1,s1,r2)


let r = 0;
for (let i = 0; i < Massiiv.length; i++) {
  r += Massiiv[i].getResistance();
}

console.log(r);
