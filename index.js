import { reduce } from "./exercises.js";


const quotes = ["Roll the dice","If not now, then when?","Be Nice!"];
console.log(quotes[Math.floor(Math.random() * quotes.length)]);

// Excercise 1
function flattening(){
    let list = [[1, 2, 3], [4, 5], [6]];

    let flattening = reduce(list, (list, curVal) => {
        return list.concat(curVal)
    }, []);
    console.log(flattening)
}
flattening();
  
// Exercise 2
function exLoop () {
    for (let index = 3; index > 0; index--) {
        console.log(index)
    }
}
exLoop();

// Exercise 3.3
function everyLoop(array, test) 
{
   for (let index = 0; index < array.length; index++) {
    if (test(array[index]) === false) {
        return false
    } 
   }
   return true
}
console.log(everyLoop([1, 3, 5], n => n < 10))
console.log(everyLoop([2, 4, 16], n => n < 10))
console.log(everyLoop([], n => n < 10))

// Exercise 3.4
function everySome(array, test) 
{
    for (let index = 0; index < array.length; index++) {
        if (array[index] && test !== !(!array[index] || !test)) {
            return false
        } 
       }
       return true
} 
console.log(everySome([1, 3, 5], n => n < 10))
console.log(everySome([2, 4, 16], n => n < 10))
console.log(everySome([], n => n < 10))
