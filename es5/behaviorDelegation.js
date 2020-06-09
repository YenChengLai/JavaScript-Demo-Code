// before
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        return 'Hello, ' + this.name;
    };
}

var jack = new Person('Jack', 20);
var john = new Person('John', 21);

console.log(jack.sayHello());
console.log(john.sayHello());
// 每一個物件都要花費memory去存取sayHello方法
console.log(jack.sayHello === john.sayHello);

// after
function NewPerson(name, age) {
    this.name = name;
    this.age = age;
}

// 將sayHello的行為(function)鏈結在原型上
NewPerson.prototype.sayHello = function () {
    return 'Hello, ' + this.name;
}

var jack = new NewPerson('Jack', 20);
var john = new NewPerson('John', 21);

console.log(jack.sayHello());
console.log(john.sayHello());
// 透過行為委派的機制，每個物件都會順著委派連結回去找尋sayHello屬性，藉此節省memory的使用
console.log(jack.sayHello === john.sayHello);