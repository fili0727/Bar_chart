"use strict";

const bogstaver = ["a", "b", "c", "d", "e", "f", "g", "h"];
const newArr = bogstaver;

bogstaver[6] = "€";
console.log(newArr[6]);
const etBogstav = bogstaver[4];
const etAndetBogstav = bogstaver[7];

console.log(etBogstav);
console.log(etAndetBogstav);

console.log(bogstaver);
bogstaver[4] = "*";
console.log(bogstaver);

bogstaver.length = 42;
console.log(bogstaver);

bogstaver[200] = undefined;
bogstaver[231] = "p";
console.log(bogstaver);

function log(bogstav) {
  console.log(bogstav);
}
bogstaver.forEach(log);


//Push tilføjer et nyt element i slutningen af arrayet
bogstaver.push("q");
console.log(bogstaver);

//Pop sletter det sidste element i arrayet
bogstaver.pop();
console.log(bogstaver);

//Shift fjerner det første element og rykker resten til et lavere index
bogstaver.shift();
console.log(bogstaver);

//Unshift tilføjer et nyt element i starten af arrayet
bogstaver.unshift("å");
console.log(bogstaver);


