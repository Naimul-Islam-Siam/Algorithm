// Print from 1 to 4 using recursion
function fn(i, n) {
   if (i > n) {
      return;
   }

   console.log(i);
   fn(i + 1, n);
}

console.log(fn(1, 4));


// Print from 4 to 1 using recursion
function fn(i, n) {
   if (i < n) {
      return;
   }

   console.log(i);
   fn(i - 1, n);
}

console.log(fn(4, 1));


// Print from 1 to 4 using backtracking
function fn(i, n) {
   if (i < n) {
      return;
   }

   fn(i - 1, n);
   console.log(i);
}

console.log(fn(4, 1));


// Print from 4 to 1 using backtracking
function fn(i, n) {
   if (i > n) {
      return;
   }

   fn(i + 1, n);
   console.log(i);
}

console.log(fn(1, 4));