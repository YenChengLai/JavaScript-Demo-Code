// 請將arr內容中偶數的部分相加，並回傳其總和的兩倍
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Imperative 寫法
function doubleSumEven(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        sum += value % 2 == 0 ? value : 0;
    }
    return sum * 2;
}

// Declarative 寫法
let doubleSumEven = arr => arr.filter(ele => ele % 2 == 0).reduce((x, y) => x + y) * 2;
console.log(doubleSumEven(arr));

// 將各步驟獨立作為不同的function
let double = x => x * 2;
let sum = arr => arr.reduce((x, y) => x + y);
let even = arr => arr.filter(ele => ele % 2 == 0);
console.log(double(sum(even(arr))));

// 撰寫一個compose方法串連function => 數學中的結合率
let compose = (...fns) => (args) => fns.reduceRight((args, f) => f.call(null, args), args);

// 上方的compose太難讀？轉換為es5以前的function宣告
let compose = function (...fns) {
    return function (args) {
        return fns.reduceRight(function (args, f) {
            return f.call(null, args);
        }, args);
    };
};

// 根據不同的需求自行組合函式
let doubleSumEven = compose(double, sum, even);
let doubleSum = compose(double, sum);
let sumEven = compose(sum, even);

console.log(doubleSumEven(arr));
console.log(doubleSum(arr));
console.log(sumEven(arr));


