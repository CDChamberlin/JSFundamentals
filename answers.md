# JSFundementals 
## Question 1
Predict what each will do in a console.log()
| Question | Prediction | Resault |
|-----|-----| -----|
|"" + 1 + 0 | undefined|"10"|
|"" - 1 + 0	|undefined|-1|
|true + false|	FALSE |1|
|!true	|FALSE| false| 
|6 / "3"|	2|2|
|2 * "3"| 	6|6|
|4 + 5 + "px"|	9px|9px|
|$ + 4 + 5|$45|$45| 
|"4" - 2|	2| 2|
|"4px" - 2|	undefined|NaN|
|"   -9    "  + 5 |	-95|" -9 5"|
|"    -9    "  - 5| -14|-14|
|null + 1| null|1|
|undefined + 1|undefined|NaN|
|undefined == null|TRUE|true|
|undefined === null|FALSE|false|
| " \t  \n" - 2| undefined| -2|
## Question 2
- Addition will have a value of 34, since string addition is concatination. 
- Multiplication will have a value of 12, since JS can read strings as numbers when doing "*, /, and -".
-Division: Expected float, but didn't get one. Gave correct answer of .75.
- Subtration: Works fine. Answer is -1.
- lessThan1: String comparison, results in correct answer, because both are one digit numbers.
- lessThan2: String comparison, answer given true, expected answer false. "30" as a string comes before "4". 
## Question 3
- 0 is false in if statements, so this statement won't log to the console
- "0" is returns as a non-empty string so this evuates true, and logs to the console. Same for -1. 
- null also results in false in if statements, so this line won't print as well.
- 1 is true in if statements, so this logs to the console.
 ## Qusetion 4
 - 2 + 3 is less than 10
 - 9 +3 is greater than 10
 - 9 + null is less than 10
 - 9 + NaN is greater than 10
 - 9 + -inf broke code, Some programs I've used had this literal defined.
 - 9 + -Infinity is less than 10
 - 9 + Infinity is greater than 10

 a += b is a short hand for a = a + b. Works with other math symbols, "- , *,  /."
## Question 5
- ``const getGreeting = function(){
    return 'Hello ' + arguents[0] + '!'
}``
- `const getGreeting = name => 'Hello ' + name+'!'`
## Question 6
## Quesiont 7
To chain the methods, the method called had to return the object, hence adding `return this` to each. 
## Question 8
## Question 9
Since dog1 is a string, dog2 doesn't point to it. Since cat2 and moresports are objects, the point to their orginal objects and modify them.
## Question 10
   