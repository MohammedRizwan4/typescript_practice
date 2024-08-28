// index signatures

// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Job: number
// }

// index signatures examples
interface TransactionObj {
    readonly [index: string]: number
}

// if we need both then write like this 

// interface TransactionObj {
//     readonly [index: string]: number
//     Pizza: number,
//     Books: number,
//     Job: number
// }

const todaysTransations: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

console.log(todaysTransations.Pizza);
console.log(todaysTransations['Pizza']);

// wont work with simple interface
let prop: string = 'Pizza'
console.log(todaysTransations[prop]);

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;
    for (const transaction in transactions) {
        // wont work with simple interface
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransations));

// todaysTransations.Pizza = 89

console.log(todaysTransations['Dave']);


interface Student {
    // [key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
}

// console.log(student.test);

// use of keyof 
for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`);

}

// another way of keyof when we dont know interface name
Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student]);
})

// another way of keyof in functions 
const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`);
}

logStudentKey(student, 'name')

// using type and Record utlity class

// interface Incomes {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'
// so here we wont have to write every time which key has number and like that but it has disadvatages also.
// type Incomes = Record<Streams, number | string>

type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
    salary: 300,
    bonus: 100,
    sidehustle: 200
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes]);
}

