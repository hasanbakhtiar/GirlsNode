"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
var admin = {
    name: "Hello",
    role: "admin"
};
console.log(admin);
var product = [
    {
        title: "a",
        price: 1,
        color: Color.Red,
        status: "active"
    }
];
function test(count, data) {
    data.push({
        title: "b",
        price: 2,
        color: Color.Blue,
        status: "pending"
    });
    console.log(count, data);
}
test(5, product);
