function findPrime(high, low = 2) {
    let primeNumbers = [];
    for (let i = low; i < high; i++) {
        if (isPrime(i)) primeNumbers.push(i);
    }

    return primeNumbers;
}

function isPrime(number) {
    if (number === 1) return false;
    else if (number === 2) return true;
    else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) return false;
        }
        return true;
    }
}