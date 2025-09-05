// Exercise 1: Print Odds
function printOdds(count) {
  if (count < 0) {
    for (let i = -1; i >= count; i--) {
      if (i % 2 != 0) {
        console.log(i);
      }
    }
  } else {
    for (let i = 1; i <= count; i++) {
      if (i % 2 != 0) {
        console.log(i);
      }
    }
  }
}

printOdds(-10);
printOdds(10);

// Exercise 2: Check Age
function checkAge(userName, age) {
  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until ${
    16 - age
  } year(s) before you can drive.`;

  if (age < 16) {
    console.log(belowSixteen);
  } else {
    console.log(aboveSixteen);
  }
}

checkAge("Liam", 12);
checkAge("April", 32);
checkAge("Jon", 21);

//Exercise 3: Which Quadrant
function checkQuadrant(x, y) {
  if (x > 0 && y > 0) {
    return "Quadrant 1";
  } else if (x < 0 && y > 0) {
    return "Quadrant 2";
  } else if (x < 0 && y < 0) {
    return "Quadrant 3";
  } else if (x > 0 && y < 0) {
    return "Quadrant 4";
  } else if (x != 0 && y == 0) {
    return "X Axis";
  } else if (x == 0 && y != 0) {
    return "Y Axis";
  } else {
    return "Origin";
  }
}

console.log(checkQuadrant(1, 1));
console.log(checkQuadrant(-1, 1));
console.log(checkQuadrant(-1, -1));
console.log(checkQuadrant(1, -1));
console.log(checkQuadrant(0, -1));
console.log(checkQuadrant(1, 0));
console.log(checkQuadrant(0, 0));

//Exercise 4: What Type of Triangle?
function isValidTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function checkTriangle(a, b, c) {
  let isValid = isValidTriangle(a, b, c);
  if (isValid) {
    //What type of triangle?
    if (a == b && b == c) {
      return `Equilateral`;
    } else if (a == b || b == c || a == c) {
      return `Isosceles`;
    } else {
      return `Scalene`;
    }
  } else {
    return `Not a valid triangle.`;
  }
}

console.log(checkTriangle(2, 3, 4)); // scalene
console.log(checkTriangle(2, 2, 2)); // equilateral
console.log(checkTriangle(1, 2, 2)); // isosceles
console.log(checkTriangle(1, 1, 2)); // invalid

//BONUS Exercise 5: Data planLimit, day, usage
/*
15 days used, 15 days remaining
Average daily use: 3.333 GB/day
You are EXCEEDING your average daily use (3.73 GB/day),
continuing this high usage, you'll exceed your data plan by
11.9 GB.
To stay below your data plan, use no more than 2.93 GB/day.
*/

function dataUsageFeedback(planLimit, day, usage) {
  if (day === 0)
  {
    console.log("ATTENTION: Day cannot be equal to zero");
    return null;
  }

  if (day === 30)
  {
    console.log("ATTENTION: Day cannot be equal to 30");
    return null;
  }
  
  let periodLength = 30;
  let currentAvg = usage / day;
  let projectedAvg = planLimit / periodLength;
  let remainingDays = periodLength - day;
  let remainingData = planLimit - usage;
  let projectedUsage = remainingDays * currentAvg;
  let statusMsg;

  if (currentAvg > projectedAvg) {
    statusMsg = "EXCEEDING";
  } else if (currentAvg < projectedAvg) {
    statusMsg = "UNDER";
  } else {
    statusMsg = "AT";
  }
  console.log(`${day} day(s) used, ${remainingDays} day(s) remaining. 
Average projected use: ${projectedAvg.toFixed(2)} GB/day.
You are ${statusMsg} your average daily use (${currentAvg.toFixed(2)} GB/day),
continuing this usage, you'll end up using ${
    planLimit - (usage + projectedUsage)
  } GB from your data limit. 
  To stay below your data plan, use no more than ${
    (remainingData / remainingDays).toFixed(2)
  } GB/day.`);
}

dataUsageFeedback(50, 30, 25);
