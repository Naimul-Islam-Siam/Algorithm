const arr = [5, 4, -1, 7, 8];

// O(n^2)
for (let i = 0; i < arr.length; i++) {
   let subArr = [];
   for (let j = i; j < arr.length; j++) {
      subArr.push(arr[j]);
      console.log(subArr);
   }
}

/*
   [5]
   [5, 4]
   [5, 4, -1]
   [5, 4, -1, 7]
   [5, 4, -1, 7, 8]
   [4]
   [4, -1]
   [4, -1, 7]
   [4, -1, 7, 8]
   [-1]
   [-1, 7]
   [-1, 7, 8]
   [7]
   [7, 8]
   [8]
*/