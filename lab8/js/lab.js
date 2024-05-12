// Lab 8
// Author: Paul Kim
// Date:5/5/2023


numbers = [1, 2, 3, 4, 5]
function MyFunction(x) {
  return x + 5;
}

MyFunction(7);
MyFunction(5);
MyFunction(2);

numbers.map(MyFunction);
numbers.map(function(x){
  return x+5;

})
var results = numbers.map(MyFunction);
console.log("Results: ", results);










  // Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
