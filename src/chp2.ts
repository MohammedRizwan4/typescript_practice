let myName = "Rizwan"
let isLoading: boolean;
let album: any;

isLoading = true
// isLoading = 1

album = 382
album = "Hello"

// functions

const sum = (a: number, b: number) => {
    return a + b;
}

// union type
let postId: string | number
let isActive: boolean | number

let re: RegExp = /\w+/g