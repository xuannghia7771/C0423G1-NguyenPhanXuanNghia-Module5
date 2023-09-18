// Sử dụng ES6 ( arrow function, fitter)
// 1. Viết hàm kiểm tra 1 số có phải là số nguyên tố
// 2. Cho 1 mảng số nguyên. Sử dụng filter để lọc ra các số là số nguyên tố
let arr = [4, 8, 7, 96, 5, 1, 13, 17, 19, 24, 37, 15, 113, 117];

function checkPrimeNumber(primeNumber) {
    let count = 0;
    for (let i = 1; i <= primeNumber; i++) {
        if (primeNumber % i === 0) {
            count++;
        }
    }
    return count === 2;
}

let arr2 = arr.filter(primeNumber => checkPrimeNumber(primeNumber));
console.log(arr2);