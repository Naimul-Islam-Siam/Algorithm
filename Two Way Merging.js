const A = [2, 8, 15, 18];
const B = [5, 9, 12, 18, 19, 25, 30];

function Merge(arr1, arr2) {
    let arrNew = [];
    let i = 0, j = 0, k = 0;

    while (i < arr1.length || j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arrNew[k] = arr1[i];
            i++;
            k++;
        }

        else {
            arrNew[k] = arr2[j];
            j++;
            k++;
        }
    }

    console.log(arrNew);
}

Merge(A, B);