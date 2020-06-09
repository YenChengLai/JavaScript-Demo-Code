function Person(name, age) {
    this.name = name;
    this.age = age;
}

var peter = new Person('Peter', 25);
console.log(peter.__proto__);
console.log(Object.getPrototypeOf(peter));
console.log(peter.__proto__ === Object.getPrototypeOf(peter));