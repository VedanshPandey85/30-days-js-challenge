const day1Learning = () => {
  //Activity 1 (Variable declartions)
  //task1 variable using var and assign a number to it then console log it
  var number1 = 22;
  console.log("This is number 1 var scoped :- ", number1);

  //task2 variable using let and assign a string to it then console log it
  let car = "mercedes";
  console.log("This is car using let scoped :- ", car);

  //Activity 2 (Contant Declarions) -- Decalare a variable using const and then assign boolean value
  const isActive = false;
  console.log(isActive);

  //Activity 3 (Data types) -- create variables of type number,string,boolean,object,array and clg their data types
  let fullName = "Vedansh Pandey";
  console.log("Name is ", fullName, "| type is ", typeof fullName);
  let age = 21;
  console.log(`age is ${age} |type is  ${typeof age}`);
  let isStudent = true;
  console.log(`Is student ${isStudent} |type is  ${typeof isStudent}`);
  let marks = [22, 43, 25, 67, 89];
  console.log(`Marks are  ${marks} |type is  ${typeof marks}`);
  let details = {
    fatherName: "VK",
    mothersName: "SP",
    isMarried: "false",
  };

  console.log(` type of details var ${typeof details}`);

  //Activity 4(Reassigning values using let )

  let x = 23;
  console.log("Intial value for x is :- ", x);
  x = 43;
  console.log("New reintialized value for x is :- ", x);

  //Activity 4(Reassigning values using let )
  const Y = 23;
  console.log("Value of Y is :- ", Y);

  try {
    Y = 56; // TypeError: Assignment to constant variable.
  } catch (error) {
    console.log(error);
  }
};

day1Learning();
