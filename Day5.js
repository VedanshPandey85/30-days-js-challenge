const checkEvenOrOdd = (num) => {
  return num % 2 == 0 ? "Even" : "Odd";
};

const calcutlateSquareToNumber = (num) => {
  return num * num;
};

const calcutlateMax = (num1, num2) => {
  return num1 > num2 ? num1 : num2 > num1 ? num2 : "Both are equal";
};

const concatenateStrings = (str1, str2) => {
  return str1 + str2;
};

const sumTwoNumbers = (num1, num2) => {
  return num1 + num2;
};

const containsCharacter = (str, char) => {
  return str.includes(char);
};

const productOfTwoNumbers = (num1, num2 = 4) => num1 * num2;

const greetPerson = (name, age = 17) => {
  return "Hello " + name + " you are " + age + " years old";
};

const repeatingFunction = (fun, number) => {
  for (let i = 0; i < number; i++) {
    fun();
  }
};

function fun() {
  console.log("Hello bro/sis");
}

const applyFunctions = (findSquare, findCube, num) => {
  const r1 = findSquare(num);
  const r2 = findCube(r1);

  return r2;
};

const findSquare = (num) => num * num;

const findCube = (num) => num * num * num;

let ans = checkEvenOrOdd(5);
console.log("The number is :- ", ans);

let square = calcutlateSquareToNumber(7);
console.log("The square of number is :-", square);

let maxNumber = calcutlateMax(2, 2);
console.log("The maximum number is :- ", maxNumber);

let result = concatenateStrings("Hello", "World");
console.log(result);

let addition = sumTwoNumbers(4, 4);
console.log("Addition of given numbers are :- ", addition);

let Present = containsCharacter("HelloWorld", "W")
  ? "Yes Present"
  : "Not Present";
console.log(Present);

let product = productOfTwoNumbers(4);
console.log("Product is => ", product);

let message = greetPerson("Vedansh", 20);
console.log(message);

let number = 5;
repeatingFunction(fun, number);

let value = applyFunctions(findSquare, findCube, 2);
console.log(value);
