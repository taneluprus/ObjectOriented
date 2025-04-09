class Resistor {
    r: number = 0;
    m: number = 0;
    constructor(Resistance: number, Maximum: number) {
      this.r = Resistance;
      this.m = Maximum
    }
    getCurrent(u: number): number {
        return u / this.r;
        
    }
    getPower(u: number) : number {
    return u* this.getCurrent(u)
  }
    getMaximum(u: number) : boolean {
    if (u*this.getCurrent(u) < this.m) {
      return true;
    } else {
      return false;
    }
    }
    GetResistance(): number {
      return this.r;
    }
}


class SeriesCircuit {
  resistors: Resistor[]=[]
  push(r: Resistor) {
    this.resistors.push(r)
  }
  getTotalResistance() {
    let sum: number = 0
    this.resistors.forEach((r: Resistor) => { sum += r.GetResistance() });
    return sum;
  }
  getCurrent(u: number) {
    return u / this.getTotalResistance();
  }
}


//VÕIMSUSE ARVUTAMINE

//console.log(r1.getPower(12));
//console.log(r1.getCurrent(12));
//console.log(r1.getMaximum(12)) 

let resistorArray: Resistor[] = [];
let r1 = new Resistor(100, 0.5)
let r2 = new Resistor(500, 0.5)
let r3 = new Resistor(200, 0.5)
let r4 = new Resistor(1000, 0.5)

//let resistorArray: Resistor[] = [r1,r2,r3,r4] ;

resistorArray.push(r1,r2,r3,r4);
//console.log(resistorArray)
















//RÖÖPÜHENDUS
let maxKontroll = function (r:Resistor, u:number) {
  if (r.getMaximum(u) === true) {
    return true
  } else  {
    return false
  } 
}

let okArray: Resistor[] = []
resistorArray.forEach((Resistor) => {
  if (maxKontroll(Resistor, 12) === true) {
    okArray.push(Resistor)
  }
})
console.log(okArray)


//KOLM TAKISTIT MASSIIVIS
// let r1: Resistor = new Resistor(110);
 // let r2: Resistor = new Resistor(220)
 // let r3: Resistor = new Resistor(4700);


//  let resistors: Resistor[] = [];
//  resistors.push(new Resistor(220));
//  resistors.push(new Resistor(4700));
//  resistors.push(new Resistor(110));
//  let totalCurrent: number = 0;
//  resistors.forEach((resistor) => { totalCurrent += resistor.getCurrent(5); });
//  console.log(totalCurrent);
