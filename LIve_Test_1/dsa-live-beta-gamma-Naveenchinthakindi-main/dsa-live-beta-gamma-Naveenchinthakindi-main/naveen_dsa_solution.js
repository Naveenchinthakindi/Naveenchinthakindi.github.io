// Starter Template
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonaccieSum(n) {
    let sum = 0;
    for (let i = 0; fibonacci(i) <= n; i++) {
        sum += fibonacci(i);
    }
    return sum;
}

function nextFibonacciPrime(n) {
    let i = n + 1;
    while (true) {
        const f = fibonacci(i);
        if (isPrime(f)) {
            return f;
        }
        i++;
    }
}

function FibonacciPrimeSum(n) {
    // Your code here
    const f = fibonacci(n);
    if (isPrime(f)) {
        return fibonaccieSum(f);
    } else {
        const nextPrime = nextFibonacciPrime(n);
        return fibonaccieSum(nextPrime);
    }


    // return 0;


}

console.log(FibonacciPrimeSum(6));
