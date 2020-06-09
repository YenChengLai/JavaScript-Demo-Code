// ES5 var變數宣告
var peter = 'Peter Pan';
console.log(peter);

var peter = 'Peter Parker';
console.log(peter);

// ES6 let變數宣告
let jack = 'Jack';
console.log(jack);

// 使用let重複進行宣告會出現錯誤
jack = 'Jackson';
console.log(jack);

// ES6 const 常數宣告
const emma = 'Emma Watson';
console.log(emma);

// 使用 const 常數化不可再度賦值
emma = 'Emma Stone';
console.log(emma);

// es5 宣告前使用會得到undefined
console.log(terry);
var terry = 'Terry';

// es6 宣告前使用因為Temporal Dead Zone而得到錯誤
console.log(teddy);
let teddy = 'Teddy';