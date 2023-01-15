/*
   Given a word pat and a text txt. Return the count of the occurences of anagrams of the word in the text.

   Input:
      txt = forxxorfxdofr
      pat = for
   Output: 3
   Explanation: for, orf and ofr appears in the txt, hence answer is 3.

   Input:
      txt = aabaabaa
      pat = aaba
   Output: 4
   Explanation: aaba is present 4 times in txt.

   https://youtu.be/mrUBUWb23hk?list=PLpIkg8OmuX-J2Ivo9YdY7bRDstPPTVGvN
*/

// Time Complexity: O(n);
// Space Complexity: O(k); length of pat
function countOccurrences(pat, txt) {
   let k = pat.length;
   let counter = new Map();
   let ans = 0;

   for (let i = 0; i < k; i++) {
      if (!counter.has(pat[i])) {
         counter.set(pat[i], 1);
      } else {
         counter.set(pat[i], counter.get(pat[i]) + 1);
      }
   }

   const checkAllZeroes = () => {
      for (let value of counter.values()) {
         if (value !== 0) {
            return false;
         }
      }

      return true;
   };

   // sliding window
   let i = 0;
   for (let j = 0; j < txt.length; j++) {
      // if there's a match, decrease the frequency of j-th element (of window) in counter by 1
      if (counter.has(txt[j])) {
         counter.set(txt[j], counter.get(txt[j]) - 1);
      }

      // only if the current window size == k
      if (j - i + 1 === k) {
         // check whether all the elemnts of the window has a zero value in the counter
         // if true, there's one anagram of pat in the window
         if (checkAllZeroes() == true) {
            ans++;
         }

         // before i increases, increase the frequency of i-th element (of window) in counter by 1
         // to recompensate the decrease caused by j 
         if (counter.has(txt[i])) {
            counter.set(txt[i], counter.get(txt[i]) + 1);
         }

         i++;
      }
   }

   return ans;
};