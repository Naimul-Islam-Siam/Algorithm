// --- Parameterised Recursion ---
// Sum of numbers from 1 to n
function fn(i, n) {
   if (i < 1) {
      console.log(n);
      return;
   }

   fn(i - 1, n + i);
}

console.log(fn(4, 0));

// Multiplication of numbers from 1 to n
function fn(i, n) {
   if (i < 1) {
      console.log(n);
      return;
   }

   fn(i - 1, i * n);
}

console.log(fn(4, 1));

// --- Functional Recursion ---

// Sum of numbers from 1 to n
function fn(n) {
   if (n == 0) {
      return 0;
   }

   return n + fn(n - 1);
}

console.log(fn(4));

// Multiplication of numbers from 1 to n
function fn(n) {
   if (n == 0) {
      return 1;
   }

   return n * fn(n - 1);
}

console.log(fn(4));