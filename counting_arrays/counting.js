"use strict";
window.addEventListener("load", start);

function start() {
  setInterval(count, 1000);
}

const talListe = [];
let tal = 0;

function count() {
  talListe.unshift(tal);
  tal++;
  if (talListe.length > 9) {
    talListe.length = 9;
  }
  console.log(talListe);
}
