var name = 'Joseph';

// template literal 直接達到串接效果
function greet(name) {
    console.log(`Hi, ${name} !`);
}

greet(name);

// template literal 中可以使用函式
function countDollar(country, amount, fixCount) {
    return `${country} ${amount.toFixed(fixCount)}`;
}

console.log(countDollar('USD', 2000.66666, 2));

// 不需特殊字元也能呈現換行
console.log(`this is a test
of
Changing Line`);