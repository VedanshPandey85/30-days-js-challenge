const day2Learning = () => {
  // add two numbers
  let number1 = 70;
  let number2 = 30;

  // Addition
  console.log("Addition :- ", number1 + number2);

  //subtraction
  console.log("subtract :- ", number1 - number2);

  //divide
  console.log("subtract :- ", number1 / number2);

  //multiply
  console.log("subtract :- ", number1 * number2);

  //assignment operators

  let x = 12;
  x += 20;
  console.log("new value for x is :- ", x);

  x -= 20;
  console.log("new value for x is :- ", x);

  //comparision
  let a = 21;
  let b = 10;
  let c = "10";

  console.log("result for > :- ", a > b);
  console.log("result for < :- ", a < b);

  console.log("result for <= :- ", a <= b);
  console.log("result for <= :- ", a >= b);

  console.log("result for ==", b == c);
  console.log("result for ===", b === c);

  //logical

  var value1 = 6;
  var value2 = 12; // it returns the second true value in this example it will return 12
  console.log("&&---", value1 && value2);

  var value3 = 6;
  var value4 = 12; // it returns the first true condition that will be 6 in this case
  console.log("||---", value3 || value4);

  var isMarried = false;
  console.log("!---", !isMarried);

  //ternary oprtator

  let testNumber = -10;
  testNumber >= 0
    ? console.log("Postive number")
    : console.log("Negative number");
};

day2Learning();
