var Resistor = /** @class */ (function () {
    function Resistor(r) {
        this.r = 0;
        this.r = r;
    }
    Resistor.prototype.getCurrent = function (u) {
        return u / this.r;
    };
    return Resistor;
}());
var r1 = new Resistor(110);
//console.log(r1.getCurrent(5));
var r2 = new Resistor(220);
//  console.log(r2.getCurrent(5));
var r3 = new Resistor(4700);
//console.log(r1.getCurrent(5))
var x = +r1 + +r2 + +r3;
console.log(x);
