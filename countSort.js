/*
   Advantage: Linear time complexity
      Time complexity -> O(n+m); 
      n = length of input array
      m = length of count arry (1 + maxNum of input array)
    
   Disadvantage: Extra auxiliary space
      Space complexity -> O(m);
      m = length of count arry (1 + maxNum of input array)
      also if input array is [2, 1, 3, 2, 2000]
      then just for one 2000, auxiliary array of length 2000+1 is required
*/

const arr = [3, 1, 9, 7, 1, 2, 4]; // input array

function countSort(inputArray) {
   let maxNum = inputArray[0];

   // find max element value of the input array
   for (let i = 1; i < inputArray.length; i++) {
      if (inputArray[i] > maxNum) {
         maxNum = inputArray[i];
      }
   }

   // create a new array of length maxNum+1 and set all element value as 0
   let countArray = Array(maxNum + 1).fill(0);

   // set countArray
   for (let i = 0; i < inputArray.length; i++) {
      let index = inputArray[i];
      countArray[index] = countArray[index] + 1;
   }

   let sortedArray = []; // final output

   for (let i = 0; i < countArray.length; i++) {
      while (countArray[i] > 0) {
         sortedArray.push(i);
         countArray[i] = countArray[i] - 1;
      }
   }

   return sortedArray;
}

console.log(countSort(arr));