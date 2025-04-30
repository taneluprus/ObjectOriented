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
    getVoltage(current:number): number{
      return current*this.r;
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

// Jadaühendus
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
  getPower(u:number) {
    return u * u / this.getTotalResistance();
  }
  getBiggestResistorPower (u:number) {
    if (this.resistors.length == 0) { return 0; }
    let current: number = this.getCurrent(u);
    let biggestPower: number = this.resistors[0].getPower(this.resistors[0].getVoltage(current));
    for (let i = 1; i < this.resistors.length; i++) {
        let power: number = this.resistors[i].getPower(this.resistors[i].getVoltage(current));
        if (power > biggestPower) { biggestPower = power; }
    }
    return biggestPower;
  }
}

let sc1: SeriesCircuit = new SeriesCircuit();
sc1.push(new Resistor(220,1));
sc1.push(new Resistor(220,1));
sc1.push(new Resistor(110,1));
console.log(sc1.getTotalResistance());
console.log(sc1.getCurrent(12));
console.log(sc1.getPower(12)); 
//console.log(sc1)
console.log(sc1.getBiggestResistorPower(12))

¸
//RÖÖPÜHENDUS

class ParalellCircuit {
  resistors: Resistor[]=[]
  push(r: Resistor) {
    this.resistors.push(r)}
  getTotalResistance() {
    let sum: number = 0
    this.resistors.forEach((r: Resistor) => { sum += 1 / (r.GetResistance()) });
    return 1/sum;
  }
}

//VÕIMSUSE ARVUTAMINE

//console.log(r1.getPower(12));
//console.log(r1.getCurrent(12));
//console.log(r1.getMaximum(12)) 

//let resistorArray: Resistor[] = [];
//let r1 = new Resistor(100, 0.5)
//let r2 = new Resistor(500, 0.5)
//let r3 = new Resistor(200, 0.5)
//let r4 = new Resistor(1000, 0.5)

//let resistorArray: Resistor[] = [r1,r2,r3,r4] ;

//resistorArray.push(r1,r2,r3,r4);
//console.log(resistorArray)


//RÖÖPÜHENDUS
//let maxKontroll = function (r:Resistor, u:number) {
//  if (r.getMaximum(u) === true) {
//    return true
//  } else  {
//    return false
//  } 
//}
//
//let okArray: Resistor[] = []
//resistorArray.forEach((Resistor) => {
//  if (maxKontroll(Resistor, 12) === true) {
//    okArray.push(Resistor)
//  }
//})
//console.log(okArray)


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
