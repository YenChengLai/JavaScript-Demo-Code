// 建立Promise物件並設定resolve和reject的情境
let promiseA = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() > 0.5 ? resolve('A完成') : reject('A失敗');
    }, 1000);
});

let promiseB = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() > 0.5 ? resolve('B完成') : reject('B失敗');
    }, 1000);
});

let promiseC = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() > 0.5 ? resolve('C完成') : reject('C失敗');
    }, 1000);
});

// 使用then方法串接Promise
console.log(promiseA().then(
    fulfilled => {
        console.log(fulfilled);
        return promiseB();
    }, rejected => {
        console.log(rejected);
        return promiseB();
    }
).then(
    fulfilled => {
        console.log(fulfilled);
        return promiseC();
    }, rejected => {
        console.log(rejected);
        return promiseC();
    }
).then(
    fulfilled => {
        console.log(fulfilled);
    }, rejected => {
        console.log(rejected);
    }
));

// then方法如果沒有定義任何處理，會拿到一個空的Promise物件
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('triggered');
    }, 1000);
}).then();

console.log(promise.then());