// using recursion  O(2^n)[exponential time complexity]
const fibonacci = function (n) {
    if (n == 0) return 0;
    if (n <= 2) return 1;

    else return fibonacci(n - 1) + fibonacci(n - 2);
}



// using Dynamic Programming _ Memorization   O(n)[linear time complexity]
const fibonacci = function (n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2 && n > 0) {
        memo[n] = 1;
        return memo[n];
    }
    //as n is stored in n-th index of memo, finding n from memo takes constant time [if it's present there]
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

    return memo[n];
}