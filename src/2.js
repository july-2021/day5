let demoNumber = () => 100;
let demoDouble = () => 99.99;
let demoString = () => "CDAC";

let demoObj = () => {
  return { id: 1 };
};

let demoList = () => [];

let demoFunction = () => {
  // function returns another function
  return () => {};
};

() => () => {};

function sample() {
  return function () {};
}
