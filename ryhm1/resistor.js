var Resistor = /** @class */ (function () {
    function Resistor(Resistance, Maximum) {
        this.r = 0;
        this.m = 0;
        this.r = Resistance;
        this.m = Maximum;
    }
    Resistor.prototype.getCurrent = function (u) {
        return u / this.r;
    };
    Resistor.prototype.getPower = function (u) {
        return u * this.getCurrent(u);
    };
    Resistor.prototype.getVoltage = function (current) {
        return current * this.r;
    };
    Resistor.prototype.getMaximum = function (u) {
        if (u * this.getCurrent(u) < this.m) {
            return true;
        }
        else {
            return false;
        }
    };
    Resistor.prototype.GetResistance = function () {
        return this.r;
    };
    return Resistor;
}());
// Jadaühendus
var SeriesCircuit = /** @class */ (function () {
    function SeriesCircuit() {
        this.resistors = [];
    }
    SeriesCircuit.prototype.push = function (r) {
        this.resistors.push(r);
    };
    SeriesCircuit.prototype.getTotalResistance = function () {
        var sum = 0;
        this.resistors.forEach(function (r) { sum += r.GetResistance(); });
        return sum;
    };
    SeriesCircuit.prototype.getCurrent = function (u) {
        return u / this.getTotalResistance();
    };
    SeriesCircuit.prototype.getPower = function (u) {
        return u * u / this.getTotalResistance();
    };
    SeriesCircuit.prototype.getBiggestResistorPower = function (u) {
        if (this.resistors.length == 0) {
            return 0;
        }
        var current = this.getCurrent(u);
        var biggestPower = this.resistors[0].getPower(this.resistors[0].getVoltage(current));
        for (var i = 1; i < this.resistors.length; i++) {
            var power = this.resistors[i].getPower(this.resistors[i].getVoltage(current));
            if (power > biggestPower) {
                biggestPower = power;
            }
        }
        return biggestPower;
    };
    return SeriesCircuit;
}());
var sc1 = new SeriesCircuit();
sc1.push(new Resistor(220, 1));
sc1.push(new Resistor(220, 1));
sc1.push(new Resistor(110, 1));
console.log(sc1.getTotalResistance());
console.log(sc1.getCurrent(12));
console.log(sc1.getPower(12));
//console.log(sc1)
console.log(sc1.getBiggestResistorPower(12));
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
