// es5 以var宣告scope會重合
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i); // 5, 5, 5, 5, 5
    }, 1000);
}

// es6 以let宣告scope會不同
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i); // 0, 1, 2, 3, 4
    }, 1000);
}