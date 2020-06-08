// 明確綁定
function greet(word1, word2) {
    console.log(this.name + ' says ' + word1 + ' and ' + word2);
}

var john = {
    name: 'John'
};

// call和apply僅差在參數傳入方式不同
greet.call(john, 'hi', 'welcome');
greet.apply(john, ['hi', 'welcome']);

// bind會回傳一個新函式，不會立即觸發執行
var johnGreet = greet.bind(john);
johnGreet('hi', 'welcome');

