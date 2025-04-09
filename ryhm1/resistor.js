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
    Resistor.prototype.getMaximum = function (u) {
        if (u * this.getCurrent(u) < this.m) {
            return true;
        }
        else {
            return false;
        }
    };
    return Resistor;
}());
//VÕIMSUSE ARVUTAMINE
var r1 = new Resistor(100, 0.5);
console.log(r1.getPower(12));
console.log(r1.getCurrent(12));
console.log(r1.getMaximum(12));
var resistorArray = [];
var r2 = new Resistor(500, 0.5);
var r3 = new Resistor(200, 0.5);
var r4 = new Resistor(1000, 0.5);
//let resistorArray: Resistor[] = [r1,r2,r3,r4] ;
resistorArray.push(r1, r2, r3, r4);
console.log(resistorArray);
var maxKontroll = function (r, u) {
    if (r.getMaximum(u) === true) {
        return true;
    }
    else {
        return false;
    }
};
var okArray = [];
resistorArray.forEach(function (Resistor) {
    if (maxKontroll(Resistor, 12) === true) {
        okArray.push(Resistor);
    }
});
console.log(okArray);
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
