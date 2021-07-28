let id = 100;
let price = 99.99;
let name = "cdac";
let active = true;

let ref = {};
let {} = ref; // Destructing. ||
let { name } = ref; // Destructing. ||

let ref1 = { ...ref };

let list = [];
let [] = list;

let list1 = [...list];

let myfun = function () {};
let myfun1 = () => {};

// THIS FUNCTION is accepting the function as a paramter.
// FUnction is CONSUEMING another function
function randomFunction(callback) {}

// THIS FUNCTION is Return
// Function is PRODUCEING another function.
function anotherRandomFunction() {
  // OBSERVE::  another function
  return () => {};
}
