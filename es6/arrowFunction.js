// arrow function對於參數數目的幾種寫法
let func1 = _ => 'a';
let func2 = () => 'b';
let func3 = x => x + 1;
let func4 = (x, y) => x + y;

console.log(func1());
console.log(func2());
console.log(func3(3));
console.log(func4(2, 3));

let splitThreeGroups = x => {
    let name;
    switch (x % 3) {
        case 1:
            name = '甲';
            break;
        case 2:
            name = '乙';
            break;
        case 0:
            name = '丙';
            break;
    }
    return `您的號碼是${x}，分到於第${name}組`;
}

console.log(splitThreeGroups(5));

// 表達式寫法，沒有問題
let a = _ => 1;
console.log(a());

// 不能使用宣告式寫法
// b() => 1;

// arrow function 中 this 會依詞彙環境向外繼承
let object = {
    callByFunction: function () {
        return this;
    },
    callByArrow: () => this
}

console.log(object.callByFunction());
console.log(object.callByArrow());
console.log(object.callByArrow.call(object));

// 一般的 function 宣告可以透過arguments保留字取得他的傳入參數
let func5 = function (x, y) {
    return arguments;
}
// arrow function 無此功用
let func6 = (x, y) => arguments;
console.log(func5(1, 2));
console.log(func6(1, 2));

let rtnArr = (function () {
    return [
        (() => this.x).bind({ x: 'inner' })(),
        (() => this.x)()
    ]
}).call({ x: 'outer' });

console.log(rtnArr);