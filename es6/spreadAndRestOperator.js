let array = [4, 5, 6];
let newOne = [0, 1, 2, 3, ...array, 7]; // 相當於使用concat合併陣列
console.log(newOne);
console.log([0, 1, 2, 3].concat(array, 7));

let sum = (a, b, c) => a + b + c; // 相當於按順序輸入陣列元素當參數
console.log(sum(...array));

let name = 'Peter'; // 可以把Array-like的物件轉化為陣列
console.log([...name]);

// 第三個以後的參數以陣列c表示
function addAll(a, b, ...c) {
    console.log(c);
    return a + b + c.reduce((x, y) => x + y);
}
console.log(addAll(1, 2, 3, 4, 5));

// 沒有參數的話b會是空陣列
function show(a, ...b) {
    console.log(a);
    console.log(b);
}
show();

// 語法錯誤：其餘運算子一定要當最後一個參數
function wrong(a, ...b, c) {
    console.log(b);
}

// 解構賦值 destructuring
const [x, y, z] = [1, 2, 3];
console.log(`${x} ${y} ${z}`);

const [q, ...w] = [1, 2, 3]
console.log(q);
console.log(w);

