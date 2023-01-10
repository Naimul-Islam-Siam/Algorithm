/*
   Given an array of integers and a number k, find the maximum sum of a subarray of size k.

   Input  : arr[] = {100, 200, 300, 400},  k = 2
   Output : 700

   Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}, k = 4 
   Output : 39
   Explanaton: We get maximum sum by adding subarray {4, 2, 10, 23} of size 4.
*/

// Time Complexity: O(N)
// Space Complexity: O(1)
function maximumSumSubarray(K, Arr, N) {
   let currentSum = 0;
   let maxSum = 0;

   for (let i = 0; i < K; i++) {
      currentSum = currentSum + Arr[i];
   }

   maxSum = currentSum;

   for (let i = K; i < N; i++) {
      currentSum = currentSum + Arr[i] - Arr[i - K];

      if (currentSum > maxSum) maxSum = currentSum;
   }

   return maxSum;
};