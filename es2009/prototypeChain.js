var john = {
    name: 'John',
    age: 20,
    greet: function () {
        return 'Hi, ' + this.name;
    }
}

var jack = {
    name: 'Jack'
}

var jason = {
    name: 'Jason',
    gender: 'male'
}

// 調用__proto__是非常不好的寫法，此處僅為示範用
jack.__proto__ = jason;
jason.__proto__ = john;

console.log(jack.age);
console.log(jack.gender);
console.log(jack.greet());