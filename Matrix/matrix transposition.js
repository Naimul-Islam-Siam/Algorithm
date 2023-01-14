const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (var i = 0; i < matrix.length; i++) {
   for (var j = 0; j < i; j++) {
      if (i == j) {
         continue;
      }

      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
   }
}

console.log(matrix); // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]