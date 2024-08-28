type One = string
type Two = string | number
type Three = "hello"

// convert to more specific and less specific

let a: One = "hello"
let b = a as Two // less specific
let c = a as Three // more specific

let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): string | number => {
    if (c === "add") return a + b
    return '' + a + b
}

// let myVal: string = addOrConcat(2, 3, 'concat')
let myVal: string = addOrConcat(2, 3, 'concat') as string

// Remember here --- TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 3, 'concat') as number

// double casting or forward casting
(10 as unknown) as string

// this wont work
// console.log(typeof ((10 as unknown) as string).toLowerCase());


// The DOM

const img = document.querySelector('img')!
const myImg = document.getElementById('img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('img')

// ? is just for no error purpose but the main thing is it should know that it is HTMLImageElement only and it will be not null.
// 1. either ! mark is used
// 2. explicit assertion

console.log(img?.src);
console.log(myImg?.src);

