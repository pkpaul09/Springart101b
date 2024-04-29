//Lab 6
// Author: Paul Kim
// Date:28 April 2024

// Constants

myTransport = ["Bus", "Car", "Walking", "Uber", "Lyft"];
myMainRide = {
  make: "Honda",
  model: "Accord",
  color: "Silver",
  year: 2015,
  age: function() {
return 2024 - this.year;
  }
}



document.writeln("Getting around: " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre");

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function reverseSort(myArray){
return myArray.sort().reverse()
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
