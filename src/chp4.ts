// Functions

// type aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist1 = {
    name: string,
    active?: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber

// but we can't do with interface

// literal types

let myname: 'Rizwan';
// myname = 'John'


let userName: 'Rizwan' | 'John' | 'Amy'
userName = 'Rizwan'
userName = 'John'
userName = 'Amy'


// Functions

const add = (a: number, b: number): number => {
    return a + b;
}

const logMsg = (messsage: any): void => {
    console.log(messsage);
}

logMsg('Hello world');
logMsg(add(2, 5));

let subtract = function (a: number, b: number): number {
    return a - b;
}

type mathFunction = (a: number, b: number) => number

// interface mathFunction {
//     (a: number, b: number): number
// }

let multiply: mathFunction = function (c, d) {
    return c * d;
}

logMsg(multiply(2, 4))

// optional parameters

const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
}

// default params
const sumAll = (a: number = 10, b: number, c: number = 20): number => {
    return a + b;
}

logMsg(sumAll(21, 43))
logMsg(sumAll(43, 54, 89))
logMsg(sumAll(undefined, 54, 89))
logMsg(sumAll(undefined, 54, undefined))

// Rest parameters

const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, current) => prev + current)
}

logMsg(total(1, 2, 3, 4))

// never type

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1;
    while (true) {
        i++;
        // if (i > 100) break;
    }
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === "number" ? true : false;
}

// use of never type
const numberOrString = (value: number | string): string => {
    if (typeof value === "string") return "string"
    if (isNumber(value)) return "number"
    return createError("this should never happen")
}

