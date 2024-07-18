const day3Learning = () => {
  const negativePositive = (number) => {
    //program to check number is positive , negative , or zero
    if (number > 0) {
      console.log("positive");
    } else if (number == 0) {
      console.log("zero");
    } else {
      console.log("negative");
    }
  };

  const isEligibleToVote = (age) => {
    if (age >= 18) {
      console.log("Eligible to vote");
    } else {
      console.log("Not eligible to vote");
    }
  };

  const findLargetst = () => {
    const getRandomRumber = () => {
      return Math.floor(Math.random() * 100);
    };

    let number1 = getRandomRumber();
    let number2 = getRandomRumber();
    let number3 = getRandomRumber();

    console.log(number1, number2, number3);

    if (number1 == number2 && number2 == number3) {
      console.log("All three numbers are equal!!");
    } else {
      if (number1 > number2 && number1 > number3) {
        console.log("number 1 biggest!");
      } else if (number2 > number3) {
        console.log("number 2 is biggest!");
      } else {
        console.log("number 3 is biggest!");
      }
    }
  };

  const findWeekDays = () => {
    let generateNumber = () => {
      return Math.floor(Math.random() * 7) + 1;
    };

    let number = generateNumber();
    switch (number) {
      case 1:
        console.log("Monday");
        break;

      case 2:
        console.log("Tuesday");
        break;

      case 3:
        console.log("Wednesday");
        break;

      case 4:
        console.log("Thursday");
        break;

      case 5:
        console.log("Friday");
        break;

      case 6:
        console.log("Saturday");
        break;

      case 7:
        console.log("Sunday");
        break;
    }
  };

  const getGrade = (score) => {
    let grade;

    switch (true) {
      case score >= 90:
        grade = "A";
        break;
      case score >= 80:
        grade = "B";
        break;
      case score >= 70:
        grade = "C";
        break;
      case score >= 60:
        grade = "D";
        break;
      case score >= 50:
        grade = "E";
        break;
      default:
        grade = "F";
    }

    return grade;
  };

  const oddEven = (value) => {
    return value % 2 == 0 ? "Even" : "Odd";
  };

  let number = -7;
  negativePositive(number);

  let age = 31;
  isEligibleToVote(age);

  findLargetst();

  findWeekDays();

  const score = 85;
  const grade = getGrade(score);
  console.log(`The grade for a score of ${score} is ${grade}.`);

  const value = 6;
  const answer = oddEven(value);
  console.log(`The number ${value} is ${answer}`);
};

day3Learning();
