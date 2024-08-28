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

    secondLang!: string

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'TypeScript') {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, I am ${this.age}`
    }
}

const Dave = new Coder('Dave', "lock", 73)
console.log(Dave.getAge());
// console.log(Dave.age);
// console.log(Dave.lang);


class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 78)
console.log(Sara.getLang());



// interface 

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitaarist implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitaarist('Jimmy', 'guitar')

console.log(Page.play('strums'));


// static members

class Peep {
    static count: number = 0

    static getCount(): number {
        return Peep.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name;
        this.id = ++Peep.count
    }
}

const John = new Peep('John')
const Amy = new Peep('Amy')
const Steve = new Peep('Steve')

console.log(John.id);
console.log(Amy.id);
console.log(Steve.id);

console.log(Peep.count);


// getters and setters

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            return
        } else throw new Error("Param is not an array of string")
    }
}

const MyBands = new Bands();

MyBands.data = ['Hello', 'Name']
console.log(MyBands.data);

MyBands.data = [...MyBands.data, 'ZZ top']
console.log(MyBands.data);

// MyBands.data = [32423, 'ZZ top']

