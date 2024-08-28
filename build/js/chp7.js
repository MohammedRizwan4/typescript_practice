"use strict";
// index signatures
// if we need both then write like this 
// interface TransactionObj {
//     readonly [index: string]: number
//     Pizza: number,
//     Books: number,
//     Job: number
// }
const todaysTransations = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransations.Pizza);
console.log(todaysTransations['Pizza']);
// wont work with simple interface
let prop = 'Pizza';
console.log(todaysTransations[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        // wont work with simple interface
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransations));
// todaysTransations.Pizza = 89
console.log(todaysTransations['Dave']);
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student.test);
// use of keyof 
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
// another way of keyof when we dont know interface name
Object.keys(student).map(key => {
    console.log(student[key]);
});
// another way of keyof in functions 
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 300,
    bonus: 100,
    sidehustle: 200
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
