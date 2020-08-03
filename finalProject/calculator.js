window.onload = () => {
    const numbers = document.querySelectorAll('.number');
    const operators = document.querySelectorAll('.operator');
    const result = document.getElementById('result');
    const acButton = document.getElementById('AC');
    let calculateArr = [];
    let operatorArr = [];
    let isCalculating = false;
    let isNew = false;
    const records = [];
    let currentNumber = 0;

    const operation = {
        '+': (x, y) => Number(x) + Number(y),
        '-': (x, y) => Number(x) - Number(y),
        'x': (x, y) => Number(x) * Number(y),
        '÷': (x, y) => Number(x) / Number(y)
    }

    acButton.onclick = () => {
        result.innerHTML = '0';
        acButton.innerHTML = 'AC';
        calculateArr = [];
        operatorArr = [];
        isCalculating = false;
        currentNumber = 0;
    }

    document.getElementById('negative').onclick = () => {
        let value = result.innerHTML;
        if (value.startsWith('-')) {
            result.innerHTML = value.substr(1, value.length);
        } else {
            result.innerHTML = '-' + value;
        }
    }

    document.getElementById('percent').onclick = () => {
        result.innerHTML = Number(result.innerHTML) / 100;
    }

    document.getElementById('point').onclick = () => {
        if (result.innerHTML.indexOf('.') < 0)
            result.innerHTML += '.';
    }

    numbers.forEach(number => {
        let _self = number;
        _self.onclick = () => {
            if (!Number(result.innerHTML) && result.innerHTML.indexOf('.') < 0 && !isCalculating || isNew) {
                result.innerHTML = _self.id;
            } else {
                result.innerHTML += _self.id;
            }
            acButton.innerHTML = Number(result.innerHTML) ? 'C' : 'AC';
            isNew = false;
        }
    });

    operators.forEach(operator => {
        operator.onclick = () => {
            calculateArr.push(result.innerHTML);
            isCalculating = true;
            currentNumber = result.innerHTML;
            if (operatorArr.length) {
                let last = 0;
                calculateArr.forEach((cal, index) => {
                    if (index) {
                        currentNumber = operation[operatorArr[index - 1]](last, cal);
                        last = currentNumber;
                    } else {
                        last = Number(cal);
                    }
                });
                result.innerHTML = currentNumber;
            }
            operatorArr.push(operator.innerHTML);
            isNew = true;
        }
    });

    document.getElementById('equal').onclick = () => {
        result.innerHTML = operation[operatorArr[operatorArr.length - 1]](currentNumber, result.innerHTML);
        isCalculating = false;
        isNew = true;
        calculateArr = [];
        operatorArr = [];
        currentNumber = 0;
    };
}