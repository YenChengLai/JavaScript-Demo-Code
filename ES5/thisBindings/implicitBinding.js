// 隱含綁定
function sayHi() {
    console.log('Hi, ' + this.name);
}

var peter = {
    name: 'Peter',
    sayHi: sayHi
}

peter.sayHi();

// implicitly lost
// case 1: passing reference
function sayHi() {
    console.log('Hi, ' + this.name);
}

var john = {
    name: 'John',
    sayHi: sayHi
}
var johnSayHi = john.sayHi;
johnSayHi();

// case 2: callback function
var jack = {
    name: 'Jack',
    sayHi: sayHi
}

function executeFunc(func) {
    func();
}

executeFunc(jack.sayHi);