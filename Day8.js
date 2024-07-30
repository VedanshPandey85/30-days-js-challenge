const fullName = "Vedansh Pandey";
const age = 22;

//printing message using template format
const message = `My name is ${fullName} and age is ${age} year old`;
console.log(message);

const stdId = 2023120;
const streamName = "Masters in IT";
const details = `hey My i am  :-${fullName} and i my std id is${stdId} :- currently i am pursuing :- ${streamName}
`;
console.log(details);

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
