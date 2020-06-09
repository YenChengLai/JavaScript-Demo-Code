// 函式宣告式 function Declaration
function greet() {
    console.log('hi');
};

// 函式表達式 function expression
var greet = function () {
    console.log('hi');
}();

// 直接執行函式且傳遞參數
var sayHi = function (name) {
    console.log('Hi, ' + name);
}('Joe');

// 以宣告式的方式撰寫
~function sayHi(name) {
    console.log('Hi, ' + name);
}('James');

// 以匿名函式、()包裹函式
(function (name) {
    console.log('Hi, ' + name);
}('Tom'));

var name = 'Peter';
(function sayHi() {
    var name = 'Joseph';
    console.log('Hi, ' + name);
}());
console.log(name);

