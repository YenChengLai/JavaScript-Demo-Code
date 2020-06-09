// 如果回傳型別是物件
function Person(name, age) {
    this.name = name;
    this.age = age;

    return {
        name: 'Peter',
        age: 30
    };
}

var john = new Person('John', 25);
console.log(john); // { name: 'Peter', age: 30 }

function Person(name, age) {
    this.name = name;
    this.age = age;

    return '1';
}
var jack = new Person('Jack', 22);
console.log(jack); // { name: 'Jack', age: 22 }

/* 
    結論：如果funciton中的回傳值為物件，則以new宣告時會以回傳值為主
         如果回傳值不為物件，則以一般函式建構式處理
         new關鍵字一定會建造一個物件
*/