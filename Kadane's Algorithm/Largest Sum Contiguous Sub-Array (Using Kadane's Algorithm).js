// Kadanes' Algorithm
// O(n)
// Without using Kadane's Algorithm, it takes O(n^2)
function maxSubArray(nums) {
   let sum = 0, maxSum = nums[0];

   for (let i = 0; i < nums.length; i++) {
      sum = sum + nums[i]; // step-1
      maxSum = Math.max(sum, maxSum); // step-2
      // step-3
      if (sum < 0) {
         sum = 0;
      }
   }

   return maxSum;
};