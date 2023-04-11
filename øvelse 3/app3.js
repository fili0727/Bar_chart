"use strict";

const alfabet = "abcdefghijklmnopqrstuvwxyzæøå";

const bogstaver1 = alfabet.split();
console.log(bogstaver1);
const bogstaver2 = alfabet.split("");
console.log(bogstaver2);
const bogstaver3 = Array.from(alfabet);
console.log(bogstaver3);

const alfa1 = bogstaver2.toString();
console.log(alfa1);
const alfa2 = bogstaver2.join();
console.log(alfa2);
const alfa3 = bogstaver2.join("");
console.log(alfa3);
const alfa4 = bogstaver2.join(" ");
console.log(alfa4);

