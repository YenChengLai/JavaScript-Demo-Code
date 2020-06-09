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

// 1. 以filter過濾取得所有男性學生陣列
// 2. 將1.得到的陣列以map將元素由物件轉為age的值
// 3. 以reduce做累加
console.log(
    studentList.filter(x => x.gender == 'male')
        .map(x => x.age)
        .reduce((x, y) => x + y)
);

// 1. 以filter過濾取得滿足的條件陣列
// 2. 以map取得需要的元素
// 3. 以join做字串串接
console.log(
    studentList.filter(x => x.gender == 'female' && !(x.number % 2))
        .map(x => x.name).join()
);

// 1. 遍歷remove陣列的每一個元素
// 2. 以1.迴圈中該筆元素做為條件過濾
function arrayDiff(source, remove) {
    remove.forEach(x => {
        source = source.filter(y => y != x);
    });
    return source;
}

let rtnArr = arrayDiff([1, 2, 2, 3, 2, 4, 5], [2]);
console.log(rtnArr);