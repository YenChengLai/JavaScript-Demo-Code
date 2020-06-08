// Shallow Copy
var peter = { name: 'Peter' };
var john = peter;
john.name = 'John';
console.log(peter);
console.log(john);

// Deep Copy
// 作法一： Object 逐一賦值
var peter = { name: 'Peter', data: { gender: 'male' } };
var mary = { name: peter.name, data: peter.data };
mary.name = 'Mary';
mary.data.gender = 'female';
console.log(peter);
console.log(mary);

// 作法二： Object.assign() 指定新值
var peter = { name: 'Peter' };
var john = Object.assign({}, peter);
john.name = 'John';
console.log(peter);
console.log(john);

// 作法三： 轉JSON
var peter = { name: 'Peter', greet: function () { return 'Hi'; } };
var mary = JSON.parse(JSON.stringify(peter));
mary.name = 'Mary';
console.log(peter);
console.log(mary);

// 作法四： 使用lodash
var _ = require('lodash'); // 這是nodeJS的寫法

var peter = { name: 'Peter', greet: function () { return 'Hi' } };
var mary = _.cloneDeep(peter);
mary.name = 'Mary';
console.log(peter);
console.log(mary);
console.log(mary.greet());
