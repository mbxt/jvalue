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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var ValueType = /** @class */ (function () {
    function ValueType() {
    }
    ValueType.leng = function (params) {
        return new Money();
    };
    return ValueType;
}());
var Money = /** @class */ (function (_super) {
    __extends(Money, _super);
    function Money() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Money;
}(ValueType));
var a = ValueType.leng(__makeTemplateObject(["100m"], ["100m"]));
console.log(a);
