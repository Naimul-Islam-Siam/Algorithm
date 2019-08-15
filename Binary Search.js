const numbers = [3, 6, 8, 12, 14, 17, 25, 29, 31, 36, 42, 47, 53, 55, 62]; //must be in sorted order.

function BinarySearch(arr, key) {
    let low = 0;
    let high = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        let mid = Math.floor((low + high) / 2);
        if (key === arr[mid]) {
            console.log(`Found ${key} in ${mid}th index.`);
            console.log(`Number of iterations = ${i + 1}`);
            break;
        }

        else if (key > arr[mid]) {
            low = mid + 1;
            mid = Math.floor((low + high / 2));
        }

        else if (key < arr[mid]) {
            high = mid - 1;
            mid = Math.floor((low + high / 2));
        }

        if (low > high) {
            console.log(`Didn't find ${key} in the list. Process iterated for ${i + 1} times.`);
            break;
        }
    }
}

BinarySearch(numbers, 2);
BinarySearch(numbers, 42);
BinarySearch(numbers, 8);