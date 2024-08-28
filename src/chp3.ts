let stringArr = ["one", "two", "three"]

// (string | number)[]
let guitars = ['Start', "Paul", 8282]

// (string | number | boolean)[]
let mixedData = ['Helo', 1839, true]

// stringArr[0] = 83;
stringArr.push('abc')

guitars[0] = 7382
// unshift adds new element in starting of array 
guitars.unshift('Jim')

let test = []
// any[]

let bands: string[] = [];
bands.push("Van halen")

// for more specific which index what datatype then use Tuple

// TUPLE

// myTuple: [string, number, boolean]
let myTuple: [string, number, boolean] = ["Dave", 323, true]

// mixed: (string | number | boolean)[]
let mixed = ['John', 12, false]

myTuple[1] = 89
// bug in tuple
// myTuple.push(3782);

// so then , this is correct because mixed have union so no order matters
mixed = myTuple

// but here we can't gaurantee that first element will be string 
// myTuple = mixed

// Objects
// not good way
let myobj: object
myobj = []
console.log(typeof myobj);
myobj = {}

const exampleObj = {
    prop1: 'Dave',
    prop2: true
}

// type annotations for object datatype
// see intellisense of optional also

type Guitarist = {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

// alternate
// interface Guitarist {
//     name: string,
//     active?: boolean,
//     albums: (string | number)[]
// }

let evh: Guitarist = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, 'OH207']
}

let jm: Guitarist = {
    name: "Jimmy",
    albums: ['Hello', 3245, 'OH207']
}

// so here its easy to annotate when use type otherwise every time we have to write whole datatype
const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}`
}

console.log(greetGuitarist(evh));
console.log(greetGuitarist(jm));

{
    type Guitarist = {
        name?: string,
        active: boolean,
        albums: (string | number)[]
    }

    let evh: Guitarist = {
        // name: "Rizwan",
        active: false,
        albums: [1984, 5150, 'OH207']
    }

    // const greetGuitarist = (guitarist: Guitarist) => {
    //     return `Hello ${guitarist.name?.toUpperCase()}`
    // }

    const greetGuitarist = (guitarist: Guitarist) => {
        if (guitarist.name) {
            return `Hello ${guitarist.name.toUpperCase()}`
        }
        return `Hello!`
    }

    console.log(greetGuitarist(evh));
}

// enums

enum Grade {
    U = 1,
    D, 
    J, 
    K, 
    L
}

console.log(Grade.U);
