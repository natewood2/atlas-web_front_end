const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

function countPrimeNumbers() {
    let primeCount = 0;
    for (let num = 2; num <= 100; num++) {
        if (isPrime(num)) {
            primeCount++;
        }
    }
    return primeCount;
}

const startTime = performance.now();
const numberOfPrimes = countPrimeNumbers();
const endTime = performance.now();


function onehundredTests() {
    const startTime = performance.now();
    for (let i = 0; i < 100; i++) {
        countPrimeNumbers();
    }
    const endTime = performance.now();
    console.log(`Execution time of running countPrimeNumbers 100 times was ${endTime - startTime} milliseconds.`);
}

setTimeout(onehundredTests, 0);