"use strict";
// convert to more specific and less specific
let a = "hello";
let b = a; // less specific
let c = a; // more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return '' + a + b;
};
// let myVal: string = addOrConcat(2, 3, 'concat')
let myVal = addOrConcat(2, 3, 'concat');
// Remember here --- TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 3, 'concat');
// double casting or forward casting
10;
// this wont work
// console.log(typeof ((10 as unknown) as string).toLowerCase());
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('img');
const nextImg = document.getElementById('img');
// ? is just for no error purpose but the main thing is it should know that it is HTMLImageElement only and it will be not null.
// 1. either ! mark is used
// 2. explicit assertion
console.log(img?.src);
console.log(myImg?.src);
