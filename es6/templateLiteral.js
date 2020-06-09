var name = 'Joseph';

function greet(name) {
    console.log(`Hi, ${name} !`);
}

greet(name);

function countDollar(country, amount, fixCount) {
    return `${country} ${amount.toFixed(fixCount)}`;
}

console.log(countDollar('USD', 2000.66666, 2));


console.log(`this is a test
of
Changing Line`);