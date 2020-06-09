// 方法一  Object.setPrototypeOf();
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

// Object.setPrototypeOf(obj1, obj2) 將obj2指派為obj1的原型
Object.setPrototypeOf(jack, jason);
Object.setPrototypeOf(jason, john);

console.log(jack.age);
console.log(jack.gender);
console.log(jack.greet());

// 方法二 Object.create()
var jason = Object.create(john);
jason.name = 'Jason';
jason.gender = 'male';

// Object.create(obj) 以obj為原型創造出一個新的物件
var jack = Object.create(jason);
jack.name = 'Jack';

console.log(jack.age);
console.log(jack.gender);
console.log(jack.greet());