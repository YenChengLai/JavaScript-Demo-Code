// 函式建構式
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var jack = new Person('Jack', 20);
console.log(jack);