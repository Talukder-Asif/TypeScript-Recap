{
  // Concept of type with Generic
  type ArrType<P> = Array<P>;

  const numArr: ArrType<number> = [1, 2, 3, 4, 5];
  const stringArr: ArrType<string> = ["a", "b", "c"];
  const boolArr: ArrType<boolean> = [true, false, true, false, false];

  interface IPerson<P, T> {
    name: string;
    age: P;
    isMarried: boolean;
    designation: string;
    BadHavit: T;
  }

  // object
  const Person: IPerson<number, null> = {
    name: "Asif Talukder",
    age: 23,
    isMarried: true,
    designation: "Full Stack Developer",
    BadHavit: null,
  };

  console.log(Person);

  //   Generetic in function
  const showMsg = <T>(msg: T) => {
    return msg;
  };
  console.log(showMsg<string>("Hello World!"));

  // 2nd function with Generic
  const showMsg1 = <T, P, Q>(msg1: T, msg2: P, personInfo: Q) => {
    return { msg1, msg2, personInfo };
  };

  console.log(
    showMsg1<string, string, IPerson<number, null>>(
      "Hello World!",
      "Hello from the other side",
      Person
    )
  );
}
