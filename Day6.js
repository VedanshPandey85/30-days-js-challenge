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

  const filterEvenVal = () => values.filter((x) => x % 2 == 0);
  console.log("Even elements:- ", filterEvenVal());

  const sumUsingReduce = () => values.reduce((a, b) => a + b, 0); // here zero is intial value
  console.log("Sum of array :- ", sumUsingReduce());
};

const arrayIteration = () => {
  let newArr = [3, 2, 1, 5, 6, 7];

  const iteratingUsingForLoop = () => {
    for (let index = 0; index < newArr.length; index++) {
      console.log(newArr[index]);
    }
  };

  console.log("Using for Each loop");
  const forEachOverArray = () => {
    newArr.forEach((element) => console.log(element));
  };

  iteratingUsingForLoop();
  forEachOverArray();
};

const multiDimension = () => {
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  console.log(matrix);

  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++)
      console.log("element matrix[", i, "]", "[", j, "] -->", matrix[i][j]);
};

arrayCreation();
arrayBasicMethods();
arrayIntermediate();
arrayIteration();
multiDimension();
