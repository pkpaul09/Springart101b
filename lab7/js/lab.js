// index.js - Turn pseudocode into comments
// Tic Tac Toe
// Author: Paul Kim
// Date: 5/3/2024


function sortUserName() {
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    console.log("userName =", userName);
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    var nameArraySort = nameArray.sort();
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted +", nameSorted);

    return nameSorted;
}

// output
document.writeln("Oh hey, I've fixed your name:",
    sortUserName(), "</br>");
    