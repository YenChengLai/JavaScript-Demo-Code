
// 以函式建構式撰寫
// function Person(name) {
//     this.name = name;
//     this.sayHi = () => {
//         return `Hi, my name is ${name}.`;
//     }
// }

// function Student(name, studentMumber) {
//     // 將this (此處為Student) 傳入Person執行，用以建立Person有的屬性
//     Person.call(this, name);
//     this.studentMumber = studentMumber;
//     this.getNumber = () => {
//         return `${name}'s student number is ${studentMumber}.`;
//     }
// }



// 以類別宣告
class Person {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        return `Hi, my name is ${this.name}.`;
    }

    static sayHello() {
        return 'Hello';
    }
}

const teddy = new Person('Teddy');
console.log(Person.sayHello());
console.log(teddy.sayHello());

class Student extends Person {

    constructor(name, studentNumber) {
        super(name);
        this.studentNumber = studentNumber;
    }

    getNumber = () => {
        return `${this.name}'s student number is ${this.studentNumber}`;
    }

    set age(age) {
        console.log('value is set');
        this._age = age;
    }

    get age() {
        if (!this._age) {
            return 'not set yet.'
        }
        return this._age;
    }
}
let Joe = new Student('Joe', 5);
Joe.age = 20;
console.log(Joe.age);
console.log(Joe.getNumber());
console.log(Joe.sayHi());

// let john = new Person('John');
// console.log(john);
// console.log(john.sayHi());
// let peter = new Person('Peter');
// console.log(peter.sayHi === john.sayHi);




