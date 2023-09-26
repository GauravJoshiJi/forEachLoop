//Case 1:-
//General case

let nums = [12, 13, 14, 15, 16];

nums.forEach((i) => {
  console.log(i);
});

//----------------------------
//Case 2:-
//Index
let nums = [1, 2, 3, 4, 5];

nums.forEach((value, index) => {
  // console.log(value);
  console.log(index);
});

//........................
//Case 3:-

let nums = [1, 2, 3, 4, 5];
nums.forEach((val, ind, arr) => {
  console.log(arr);
});
