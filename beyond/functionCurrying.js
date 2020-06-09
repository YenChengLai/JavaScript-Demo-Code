// 一般的 JavaScript function
function add(x, y) {
    return x + y;
}
console.log(add(3, 5));

// 柯里化處理後
function add(x) {
    return function (y) {
        return x + y;
    };
}
console.log(add(3)(5));

let multiply = (x, y) => x * y;
let multiplyThree = y => multiply(3, y);
let multiplyFive = y => multiply(5, y);

console.log(multiply(3, 5));
console.log(multiplyThree(5));
console.log(multiplyFive(5));

// lodash也有提供函式柯里化的方法
let _ = require('lodash');
let curriedMultiply = _.curry(multiply);
console.log(curriedMultiply(2)(5));

// 原始分數
const originalScores = [60, 70, 75, 70, 80, 80];

// 調分，全體加十分
let adjust = (arr, amount) => arr.map(score => score + amount);
console.log(adjust(originalScores, 10));

// 調分，全體加一成
adjust = (arr, timer) => arr.map(score => score * timer);
console.log(adjust(originalScores, 1.1));

/*
    結論：柯里化前調分的方法，每次規則變動都要重新調整
*/