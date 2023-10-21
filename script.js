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

let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four
let multiplication = three * four
let division = three / four
let subtraction = three - four
let lessThan1 = three < four
let lessThan2 = thirty < four
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
let a = 2, b = 3;
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

const getGreeting1 = function() {
    return 'Hello ' + arguments[0] +'!';
}

const getGreeting2 = name => 'Hello ' + name + '!'
//console.log(getGreeting("Collin"))
// console.log(getGreeting1('Collin'))
// console.log(getGreeting2(`Collin`))

// Question 6 given code
const westley = {
    name: 'Westley',
    numFingers: 5
    }
    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
    const inigo = {
    firstName: 'Inigo',
    greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
    console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
    return 'Nice to meet you.';
    }
    }
    inigo.greeting(westley)
    inigo.greeting(rugen)