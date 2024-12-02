{// Basic DataType

const age: number = 23;
const name: string = 'Alice';
const isMarried: boolean = true;
const courseCode: number[] = [3101, 3102, 3103, 3104]; // Array
const info: [string, string, null, number, number] = ["name", "isMarried", null, 122, 124] //Tupple


// Type
type Person = {
    name: string,
    age: number,
    isMarried: boolean,
    designation: string,
    BadHavit: string | null
}

// object
const BestFriend: Person = {
    name: "Rita",
    age: 20,
    isMarried: true,
    designation: "House Keeper",
    BadHavit: null
}
}