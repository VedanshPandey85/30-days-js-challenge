//task1 for loop

let print1ToN = () => {
  for (let i = 1; i <= 10; i++) console.log(i);
};

let multiplicationOf5 = () => {
  for (let i = 1; i <= 10; i++) console.log("5 * ", i, " = ", i * 5);
};

//while loop taks

// calculate sum of numbers from 1 to 10 using while loop

let calculateSum1to10 = () => {
  let i = 1,
    sum = 0;
  while (i <= 10) {
    sum += i;
    i++;
  }
  return sum;
};

//print 10 to 1 using while loop

let print10to1 = () => {
  let i = 10;
  while (i >= 1) {
    console.log(i);
    i--;
  }
};

//do while....
let print1to5 = () => {
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 5);
};

//find factorial of a number

let factorial = (num) => {
  // factorial of 5 is 5 * 4 * 3 * 2 * 1

  let ans = 1;
  //   for(let i = num; i >= 1; i--) ans *= i;

  i = num;
  do {
    ans *= i;
    i--;
  } while (i >= 1);

  return ans;
};

let printStars = (num) => {
  for (let i = 1; i <= num; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
};

let skip5thnumber = () => {
  for (let i = 1; i <= 10; i++) {
    if (i == 5) continue;
    console.log(i);
  }
};
let stopOn7 = () => {
  for (let i = 1; i <= 10; i++) {
    if (i == 7) break;
    console.log(i);
  }
};

console.log("Printing from 1 to 10 using for loop :-");
print1ToN();
console.log("Table of 5 is -----");
multiplicationOf5();
let ans = calculateSum1to10();
console.log("Sum from 1 to 10 is :- ", ans);
console.log("Printing from 10 to 1 is using while loop :- ");
print10to1();
console.log("Printing from 1 to 5 is using do while loop :- ");
print1to5();

let number = 5;
console.log("factorial of ", number, "is", factorial(number));

let value = 6;
printStars(value);

console.log("----Printing 1 to 10 skipping 5---");
skip5thnumber();

console.log("----Printing 1 to 10 stoping on  7---");
stopOn7();
