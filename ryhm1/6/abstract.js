var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractResistor = /** @class */ (function () {
    function AbstractResistor() {
    }
    return AbstractResistor;
}());
var Resistor = /** @class */ (function (_super) {
    __extends(Resistor, _super);
    function Resistor(r) {
        var _this = _super.call(this) || this;
        _this.r = 0;
        _this.r = r;
        return _this;
    }
    Resistor.prototype.getResistance = function () {
        return this.r;
    };
    return Resistor;
}(AbstractResistor));
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch(state) {
        var _this = _super.call(this) || this;
        _this.state = false;
        _this.state = state;
        return _this;
    }
    Switch.prototype.getState = function () {
        return this.state;
    };
    Switch.prototype.setState = function (state) {
        this.state = state;
    };
    Switch.prototype.getResistance = function () {
        if (this.state) {
            return 0;
        }
        else
            return Infinity;
    };
    return Switch;
}(AbstractResistor));
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
var Massiiv = [];
var r1 = new Resistor(220);
var s1 = new Switch(true);
var r2 = new Resistor(110);
Massiiv.push(r1, s1, r2);
var r = 0;
for (var i = 0; i < Massiiv.length; i++) {
    r += Massiiv[i].getResistance();
}
console.log(r);
