//Modern version of Fisher-Yates Shuffle Algorithm

function shuffleArray(array) {
   let temp, j;

   for (let i = array.length - 1; i > 0; i--) {
      temp = array[i];
      j = Math.floor(Math.random() * (i + 1)); // Math.random() * 5 = any among 0,1,2,3,4
      array[i] = array[j];
      array[j] = temp;
   }

   return array;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(shuffleArray(numbers));