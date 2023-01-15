const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let i = 0; i < matrix.length; i++) {
   let backward = false, count = 0, j;

   if (i % 2 === 0) {
      backward = false;
      j = 0;
   } else {
      backward = true;
      j = matrix[i].length - 1;
   }

   while (count < matrix[i].length) {
      console.log(matrix[i][j]);

      count++;

      if (backward === true) {
         j--;
      } else {
         j++;
      }
   }
}