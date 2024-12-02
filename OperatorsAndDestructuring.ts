{
  // Spread Operator in Array
  const rolls: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const newRolls: number[] = [...rolls, 10, 11, 12];

  console.log(newRolls);


  // Spread Operator in Object
  type Person = {
    name: string;
    age: number;
    isMarried: boolean;
    designation: string;
    BadHavit: string | null;
    salary?: number;
  };

  // object
  const Person1: Person = {
    name: "Rita",
    age: 20,
    isMarried: true,
    designation: "House Keeper",
    BadHavit: null,
  };

  const Person2: Person = {
    ...Person1,
    salary: 350000
  }
  console.log(Person2)

//   Rest Operator

const [first,a,b, ...bakiElement]= [1,2,3,4,5,6,7,8,9,10]

console.log(`first: ${first}`)
console.log(`a: ${a}`)
console.log(`b: ${b}`)
console.log(`bakiElement: ${bakiElement}`)


}
