const arrayCreation = () => {
  let arr = [];
  for (let index = 1; index <= 5; index++) {
    arr.push(index);
  }
  console.log("The created aray is :- ", arr);
  const getFirstElement = () => arr[0];
  const getLastElement = () => arr[arr.length - 1];
  console.log("First Element :- ", getFirstElement());
  console.log("Last Element :- ", getLastElement());
};

const arrayBasicMethods = () => {
  console.log("Array basic methods.....");
  let numbers = [11, 23, 21, 56, 7];
  console.log("Origina array", numbers);
  numbers.push(99);
  console.log("New array after push :-", numbers);
  numbers.pop();
  console.log("After pop :- ", numbers);
  numbers.shift();
  console.log("After Shift :- ", numbers);
  numbers.unshift(14);
  console.log("After unShift :- ", numbers);
};

const arrayIntermediate = () => {
  console.log("Intermediate methods----");
  let values = [2, 3, 5, 6, 9];

  const doubleUsingMap = () => values.map((v) => v * 2);
  console.log("Doubled elements:- ", doubleUsingMap());
  console.log(values);
};

arrayCreation();
arrayBasicMethods();
arrayIntermediate();
