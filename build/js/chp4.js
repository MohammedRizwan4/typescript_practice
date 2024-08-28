"use strict";
// Functions
// but we can't do with interface
// literal types
let myname;
// myname = 'John'
let userName;
userName = 'Rizwan';
userName = 'John';
userName = 'Amy';
// Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (messsage) => {
    console.log(messsage);
};
logMsg('Hello world');
logMsg(add(2, 5));
let subtract = function (a, b) {
    return a - b;
};
// interface mathFunction {
//     (a: number, b: number): number
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 4));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// default params
const sumAll = (a = 10, b, c = 20) => {
    return a + b;
};
logMsg(sumAll(21, 43));
logMsg(sumAll(43, 54, 89));
logMsg(sumAll(undefined, 54, 89));
logMsg(sumAll(undefined, 54, undefined));
// Rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, current) => prev + current);
};
logMsg(total(1, 2, 3, 4));
// never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        // if (i > 100) break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("this should never happen");
};
