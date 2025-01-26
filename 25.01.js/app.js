
var number = parseInt(prompt("Մուտքագրեք ցանկացած թիվ:"));

if (number <= 1) {
    console.log(number + " ոչ պարզ է,ոչ բաղադրյալ:");
} else {
    var isPrime = true;
    for (var l = 2; l < number; l++) {
        if (number % l === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(number + " պարզ է:");
    } else {
        console.log(number + " բաղադրյալ է:");
    }
}






var numbers = [2, 33, 44, 5, 86, 37, 8, 3, 20];
var primeCount = 0;

for (var d = 0; d < numbers.length; d++) {
    var num = numbers[d];

    if (num <= 1) continue;
    var isPrime = true

    for (var a = 2; a < num; a++) {
        if (num % a === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) primeCount++;
}

console.log("Պարզ թվերի քանակը՝", primeCount);





var numbers = [2, 33, 44, 9, 20, 13, 20];
var divisor = parseInt(prompt("Մուտքագրեք թիվը:"));

var filteredNumbers = numbers.filter(num => num % divisor !== 0);

console.log("Չբաժանվող թվերը:", filteredNumbers);






const arr = [2, 33, 44, 55, 40, 30, 20];
var sum = 0;

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
        sum += arr[i];
    }
}

console.log(sum);