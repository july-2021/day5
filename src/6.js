// [1, 4, 9, 16, 25]
let numList = [1, 2, 3, 4, 5];
let newlist1 = numList.map((item) => {
  return item * item;
});
let newlist2 = numList.map((item) => item * item);

console.log(newlist1, newlist2);

// REACT PERSPECTIVE
// Text :: H, P, UL, Table,
// Transformed
// [<h1>delhi</h1>, <h1>calcutta</h1>, <h1>maumbai</h1>, <h1>chennai</h1>]

let list = ["delhi", "calcutta", "mumbai", "chennai"];
// list.map();
// list.map(() => {});
let list1 = list.map((item) => {
  return `<h1>${item}</h1>`;
});

let list2 = list.map((item) => `<h1>${item}</h1>`);
console.log(list1, list2);
