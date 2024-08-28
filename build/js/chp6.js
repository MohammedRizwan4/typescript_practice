"use strict";
// repititive code
// class Coder {
//     name: string
//     music: string
//     age: number
//     lang: string
//     constructor(name: string, music: string, age: number, lang: string) {
//         this.name = name
//         this.music = music
//         this.age = age
//         this.lang = lang
//     }
// }
class Coder {
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I am ${this.age}`;
    }
}
const Dave = new Coder('Dave', "lock", 73);
console.log(Dave.getAge());
// console.log(Dave.age);
// console.log(Dave.lang);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev('Mac', 'Sara', 'Lofi', 78);
console.log(Sara.getLang());
class Guitaarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitaarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
// static members
class Peep {
    static getCount() {
        return Peep.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peep.count;
    }
}
Peep.count = 0;
const John = new Peep('John');
const Amy = new Peep('Amy');
const Steve = new Peep('Steve');
console.log(John.id);
console.log(Amy.id);
console.log(Steve.id);
console.log(Peep.count);
// getters and setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of string");
    }
}
const MyBands = new Bands();
MyBands.data = ['Hello', 'Name'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ top'];
console.log(MyBands.data);
// MyBands.data = [32423, 'ZZ top']
