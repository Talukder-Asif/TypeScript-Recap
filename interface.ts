{
  // Type Aliases
  type PersonType = {
    name: string;
    age: number;
    isMarried: boolean;
    designation: string;
    BadHavit: string | null;
  };

  // Interface
  interface IPerson {
    name: string;
    age: number;
    isMarried: boolean;
    designation: string;
  }

  interface IPerson{
    BadHavit: string | null;
  }
//   Interface can automatically marge if there are two interface in same name

  // object
  const Person: IPerson = {
    name: "Asif Talukder",
    age: 23,
    isMarried: true,
    designation: "Full Stack Developer",
    BadHavit: null,
  };

  console.log(Person);
}
