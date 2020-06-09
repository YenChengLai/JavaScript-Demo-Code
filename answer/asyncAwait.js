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

// catch 捕捉任何Promise的reject情況
(async () => {
    console.log('start');
    let result;
    try {
        result = await promiseA();
        console.log(result);
        result = await promiseB();
        console.log(result);
        result = await promiseC();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
})();