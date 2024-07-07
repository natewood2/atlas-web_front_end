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
const endTime = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);
