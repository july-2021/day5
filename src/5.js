// Large Array :: with 100s of element.
let list = [
  "delhi",
  "calcutta",
  "chennai",
  "mumbai",
  "pune",
  "guwahati",
  "kochi",
];

// Array Destructing
let [] = list;
let [city1] = list;
let [city11, city12] = list;

let [, city21, , city22] = list;

console.log(city11, city12);
