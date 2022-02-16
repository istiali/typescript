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
var Firstname = /** @class */ (function () {
    function Firstname(Firstname) {
        this.Firstname = Firstname;
    }
    return Firstname;
}());
var Name = /** @class */ (function (_super) {
    __extends(Name, _super);
    function Name(Firstname, surname) {
        var _this = _super.call(this, Firstname) || this;
        _this.surname = surname;
        return _this;
    }
    Name.prototype.display = function () {
        console.log("Firstname :" + this.Firstname);
        console.log("Surname: " + this.surname);
    };
    return Name;
}(Firstname));
var obj = new Name(" Istiyak", "Shaikh");
obj.display();
