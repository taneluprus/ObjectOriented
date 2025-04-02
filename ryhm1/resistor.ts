class Resistor {
    r: number = 0;
    constructor(r: number) {
      this.r = r;
    }
    getCurrent(u: number): number {
        return u / this.r;
        
    }
    getPower(u: number) : number {
    return u* this.getCurrent(u)
  }
}

let r1 = new Resistor(1000)
console.log(r1.getPower(5));





























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
