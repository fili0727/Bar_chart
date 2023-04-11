"use strict";

const people = ["Harry", "Ron", "Hermoine"];
let result;

//Tilføjer "Draco" i slutningen
// result = people.push("Draco");

// //Fjerner "Draco"
// result = people.pop();

// //Tilføjer "Neville" i slutningen"
// result = people.push("Neville");

// //Tilføjer "Luna" i slutningen"
// result = people.push("Luna");

// //Viser stringen index 0,1,2
// result = people.slice(0, 3);

// //Tilføjer "Cho" mellem 1 og 0
// result = people.splice(1, 0, "Cho");

// //Erstatter index 1 med "Ginny"
// people[1] = "Ginny";

// //Tilføjer "Fred" og "George" i slutningen af arrayet
// result = people.push("Fred", "George");

// //Fortæller indexet af "Fred" - index 6
// result = people.indexOf("Fred");

//Sætter alle index før "1" i et seperat array
result = people.splice(result, 1);

console.log(result);
console.log(people);
