const studentList = [
    { number: 1, name: 'Peter', age: 21, gender: 'male' },
    { number: 2, name: 'Joseph', age: 25, gender: 'male' },
    { number: 3, name: 'Mary', age: 23, gender: 'female' },
    { number: 4, name: 'Emma', age: 20, gender: 'female' },
    { number: 5, name: 'Ariel', age: 28, gender: 'female' },
    { number: 6, name: 'Leo', age: 29, gender: 'male' },
    { number: 7, name: 'Frank', age: 27, gender: 'male' },
    { number: 8, name: 'Gloria', age: 26, gender: 'female' }
];

// forEach
studentList.forEach(function (x) {
    console.log(x.name);
});

studentList.forEach(x => {
    x.type = (x.number % 2) ? 'odd' : 'even';
});
console.log(studentList);

// 將陣列中每個物件元素的name串接
let printName = (inputArr) => {
    let nameStr = '';
    inputArr.forEach(x => {
        nameStr = nameStr + ' ' + x.name;
    });
    return nameStr;
}

// filter 過濾並得到一個新陣列
console.log(printName(studentList.filter(function (x) {
    return x.age > 25
})));
console.log(printName(studentList.filter(x => x.age > 25)));

// map 直接改變元素內容放入新陣列
let fiveYearsLater = studentList.map(x => {
    return x.name + ' ' + (x.age + 5);
});
console.log(fiveYearsLater);

// every 檢核是否全部滿足
console.log(studentList.every(x => x.age >= 20));
console.log(studentList.every(x => x.age >= 25));

// some 單項滿足即成立
console.log(studentList.some(x => x.age > 30));
console.log(studentList.some(x => x.age > 25));

// reduce 由前向後做累計操作
console.log(studentList.reduce(function (x, y) {
    return {
        age: x.age + y.age
    }
}));
console.log(studentList.reduce((x, y) => ({ age: x.age + y.age })).age);

// find 找尋單筆(第一筆)滿足條件的元素
console.log(studentList.find(x => x.age > 25).name);

// join 字串串接
const numberArr = [1, 2, 3, 4, 5];
console.log(numberArr.join());
console.log(numberArr.join(''));
console.log(numberArr.join('-'));