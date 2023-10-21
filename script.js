// Quetion  1 console logs
// console.log(""+1+0);
// console.log(""-1+0);
// console.log(true + false);
// console.log(!true);

// console.log(6/"3");
// console.log("2" * "3")
// console.log(4+5+"px")
// console.log("$" + 4+5)
// console.log("4"-2)
// console.log("4px"-2)
// console.log(" -9 " + 5)
// console.log(" -9 " - 5)
// console.log(null + 1)
//console.log(undefined+1)
//console.log(undefined == null)
// console.log(undefined === null)
// console.log(" \t \n" - 2)

//Question 2 given code

let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
let addition = three + four;
let multiplication = three * four;
let division = three / four;
let subtraction = three - four;
let lessThan1 = three < four;
let lessThan2 = thirty < four;
// console.log(lessThan1)

// Question 3 given code
/*
if (0) console.log('#1 zero is true')
if ("0") console.log('#2 zero is true')
if (null) console.log('null is true')
if (-1) console.log('negative is true')
if (1) console.log('positive is true')
 */

// Question 4 given code
let a = 2,
  b = 3;
let result = `${a} + ${b} is `;
/* if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}
 */
// console.log(a + b < 10 ? result += 'less than 10' : result += 'greater than 10')

// Question 5 given code
/*
function getGreeting(name) {
return 'Hello ' + name + '!';
}
*/

const getGreeting1 = function () {
  return "Hello " + arguments[0] + "!";
};

const getGreeting2 = (name) => "Hello " + name + "!";
//console.log(getGreeting("Collin"))
// console.log(getGreeting1('Collin'))
// console.log(getGreeting2(`Collin`))

// Question 6 given code

const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: (person) =>
    person.numFingers === 6
      ? "You killed my father! Prepare to die!"
      : "Nice to meet you",
  /*{
  // if (person.numFingers === 6) return "I have six fingers";
  // else return "Nice to meet you.";
  // console.log('getCatchPhrase')
  }*/
};
// inigo.greeting(westley);
// inigo.greeting(rugen);

// Question 7
/*
const basketballGame = {
    score: 0, fouls: 0,
    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this
    },
    threePointer() {
        this.score += 3;
        return this
    },
    halfTime() {
        console.log('Halftime score is '+this.score +
    ', and there have been '+this.fouls+' fouls up to now.');
        return this
    },
    foul(){
        this.fouls++;
        return this;
    },
    fullTime(){
        console.log('The final score is '+this.score+
    ', and there have been '+this.fouls+' fouls during the whole game.');
        return this
    }
    }
    //modify each of the above object methods to enable function chaining as below:
    basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
    basketballGame.foul().basket().threePointer().foul().halfTime().freeThrow().foul().threePointer().basket().fullTime()
*/
// Question 8
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};
function loopObjects(obj) {
  for (key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}
//loopObjects(sydney)
const DC = {
  name: "Washington, DC",
  population: 5_490_000,
  state: "Washington, DC",
  founded: "July 16, 1790",
  timezone: "Estern Daylight Time",
};
//loopObjects(DC)

//Question 9
let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };
let moreSports = teamSports.slice()
moreSports.push("Baseball")
moreSports.unshift("Soccer")
let cat2 = {...cat1}
cat2.name = "Bear"
dog2 = dog1
dog2 = "Spot"
//console.log(dog1, cat1, teamSports, moreSports)

//Question 10
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = () => age > 16
    }
person1 = new Person("Spot", 3)
person2 = new Person("Collin", 26)
class PersonClass{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.human = true;
    }
    canDrive() {
        return (this.age >= 16)
    }
}
person3 = new PersonClass("Joe", 26)
console.log(person1, person2, person3)
console.log(person1.canDrive(), person2.canDrive(), person3.canDrive())
