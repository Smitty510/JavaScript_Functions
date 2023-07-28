console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
printOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(name, age){
    let legalMsg = `Congrats ${name}! You can drive!`;
    let crimeMsg = `Sorry ${name}, you need to wait ${16 - age} year(s) until you can drive`;

    if (age < 16) {
        console.log(crimeMsg);
    } else {
        console.log(legalMsg);
    }
}

checkAge("Billy", 15) // Crime
checkAge("Eileen", 21)// Legal
checkAge("Bob", 72)   // Legal

//Exercise 3 Section
console.log("EXERCISE 3: \n==========\n");

function checkQuadrant(x, y) {
    if(x > 0 && y > 0) {
        return "Quadrant 1";
    }else if ( x < 0 && y > 0){
        return "Quadrant 2";
    }else if (x < 0 && y < 0){
        return "Quadrant 3";
    }else if (x > 0 && y < 0){
        return "Quadrant 4";
    }else if (x == 0 && y != 0){
        return "X Axis";
    }else if (x != 0 && y == 0){
        return "Y Axis";
    }else{
        return "Origin";
    }
}
console.log(checkQuadrant(5, 6))   // Quadrant 1
console.log(checkQuadrant(-9, 18)) // Quadrant 2
console.log(checkQuadrant(-3, -22))// Quadrant 3
console.log(checkQuadrant(16, -56))// Quadrant 4
console.log(checkQuadrant(0, -6))  // X Axis
console.log(checkQuadrant(-45, 0)) // Y Axis
console.log(checkQuadrant(0,0))    // Origin

//Exercise 4 Section
console.log("EXERCISE 4: \n==========\n");

function checkTriangle(a, b, c){

    if (a + b > c && a + c > b && b + c > a) {
        if (a == b && b == c){
          return "Equilateral";
        } else if (a == b || b == c || a == c){
          return "Isosceles";
        } else {
          return "Scalene";
        }        
    } else {
      return "Not a Valid Triangle";
    } 
}
console.log(checkTriangle(2, 3, 4))// Scalene
console.log(checkTriangle(2, 2, 2))// Equilateral
console.log(checkTriangle(1, 2, 2))// Isosceles
console.log(checkTriangle(1, 1, 2))// Not a Valid Triangle

//EXERCISE 5 Section
console.log("EXERCISE 4: \n==========\n");

function dataUsage(planLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let remainingData = planLimit - usage;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg; 

    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining`);
    console.log(`Average projected use: ${projectedAvg} GB/Day`);

    if (currentAvg > projectedAvg){
        statusMsg = "OVER";
    }   else if (currentAvg < projectedAvg){
        statusMsg = "UNDER";
    }   else{
        statusMsg = "AT"
    }
    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining.
    Average projected use: ${projectedAvg} GB/Day
    You are ${statusMsg} your average daily use (${currentAvg} GB/Day),
    continuing this usage, you'll end up using ${
    planLimit - (usage + projectedUsage)} GB from your data limit.
    To stay below your data plan, use no more than ${remainingData / remainingDays}
    GB/Day.`);
}
dataUsage(100, 5, 15)// Under
dataUsage(50, 27, 49)// Over
dataUsage(90, 3, 9)  // At