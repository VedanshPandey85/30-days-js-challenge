const stringLiterals = () => {
  const fullName = "Vedansh Pandey";
  const age = 22;

  //printing message using string template format
  const message = `My name is ${fullName} and age is ${age} year old`;
  console.log(message);

  const stdId = 2023120;
  const streamName = "Masters in IT";
  const details = `hey My i am  :-${fullName} and i my std id is${stdId} :- currently i am pursuing :- ${streamName}
`;
  console.log(details);
};

stringLiterals();

const destructure = () => {
  //destructuring arrays and objects
  const fruits = ["Apple", "Banana", "Grapes"];
  const [first, second, third] = fruits;
  console.log(first);
  console.log(second);
  console.log(third);

  const person = {
    name: "Pandey",
    designation: "Software develpor",
    city: "Pune",
  };

  const { name, designation, city } = person;
  console.log(name);
  console.log(designation);
  console.log(city);
};

destructure();

const spreadExamples = () => {
  // array example
  const arr1 = [1, 2, 3, 4];
  const arr2 = [5, 6, 7, 8];

  const newarr = [...arr1, ...arr2];
  console.log(newarr);

  const newarr2 = [33, 44, ...newarr];
  console.log(newarr2);

  //sum of array using spread operator
  const numbers = [1, 2, 3, 4];
  const calculateSum = (a, b, c, d) => {
    return a + b + c + d;
  };
  console.log("Sum of Number array :-", calculateSum(...numbers));

  //object examples using spread operator

  //simple example
  const ogObject = { a: 1, b: 2 };
  const copiedObjec = { ...ogObject };
  console.log(copiedObjec);

  //merging two objects also adding some new elements
  const obj1 = { a: 1, b: 2, c: 3 };
  const obj2 = { a: 77, b: 88, c: 99 };
  const merged = { ...obj1, ...obj2, z: 100 };
  console.log("merging obj1 and obj 2 with new elements:-", merged);

  //user example
  const user = {
    fullName: "Jayesh Parmar",
    age: 22,
    job_profile: "Administrator",
    address: {
      city: "New York",
      country: "USA",
    },
  };

  const fullDetails = {
    ...user,
    address: {
      ...user.address,
      city: "San Francisco",
    },
  };
  console.log(fullDetails);
};

spreadExamples();

const restOperatorExample = () => {
  //basic example
  const numbers = [1, 2, 3, 4, 5];
  const [first, second, ...rest] = numbers;
  console.log(first);
  console.log(second);
  //combines all the elements of array together
  console.log(rest);

  //now using rest operator in function

  const sum = (...number) => {
    return number.reduce((n1, n2) => n1 + n2, 0);
  };
  console.log("Result 1 :--", sum(1, 2, 3, 4));
  console.log("Result 2 :--", sum(5, 10));
};

const sumwithDefault = (num1, num2 = 1) => {
  return num1 * num2;
};

restOperatorExample();
console.log("Result 1 with both args:- ", sumwithDefault(2, 8));
console.log("Result 2 with one arg and second default:-", sumwithDefault(2));

const enhancedObjectLiterals = () => {
  // it comes with various shorthand notations
  const name = "Ved Pandey";
  const propName = "age";
  const method = "printAge";

  const person = {
    name,
    [propName]: 30,
    greet() {
      console.log(`Hello dear ${this.name}`);
    },
    [method]() {
      console.log(`Your age is :- ${this.age}`);
    },
  };

  console.log(person);
  person.greet();
  person.printAge();
};

enhancedObjectLiterals();
