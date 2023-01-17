/*
   Input : 
      N = 5
      A[] = {-8, 2, 3, -6, 10}
      K = 2
   Output : 
      -8 0 -6 -6
   Explanation :
      First negative integer for each window of size k
      {-8, 2} = -8
      {2, 3} = 0 (does not contain a negative integer)
      {3, -6} = -6
      {-6, 10} = -6
   

   Input : 
      N = 8
      A[] = {12, -1, -7, 8, -15, 30, 16, 28}
      K = 3
   Output :
      -1 -1 -7 -15 -15 0


   https://practice.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1
   https://youtu.be/-uc7OCrjp8g?list=PLpIkg8OmuX-J2Ivo9YdY7bRDstPPTVGvN
*/

// --- Tricky ---
// Time Complexity: O(n)
// Space Complexity: O(k) queue
printFirstNegativeInteger(n, k, arr) {
   let i = 0, j = 0;
   let queue = [], result = [];

   while (j < n) {
      if (arr[j] < 1) {
         queue.push(arr[j])
      }

      if (j - i + 1 == k) {
         queue.length > 0 ? result.push(queue[0]) : result.push(0);

         if (arr[i] < 0) {
            queue.shift();
         }

         i++;
      }

      j++;
   }

   return result;
}