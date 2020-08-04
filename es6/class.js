// function Person(name) {
//     this.name = name;

//     this.sayHi = () => {
//         return `Hi, my name is ${name}.`;
//     }
// }


class Person {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        return `Hi, my name is ${this.name}.`;
    }
}

let john = new Person('John', 25);
console.log(john);
console.log(john.sayHi());



