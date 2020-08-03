window.onload = () => {
    const numbers = document.querySelectorAll('.number');
    const operators = document.querySelectorAll('.operator');
    const result = document.getElementById('result');
    const acButton = document.getElementById('AC');
    let calculateArr = [];
    let operatorArr = [];
    let isCalculating = false;
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
        result.innerHTML += '.';
    }

    numbers.forEach(number => {
        let _self = number;

        _self.onclick = () => {

            if (!Number(result.innerHTML) && result.innerHTML.indexOf('.') < 0 || isCalculating) {
                result.innerHTML = _self.id;
            } else {
                result.innerHTML += _self.id;
            }
            currentNumber = Number(result.innerHTML);
            acButton.innerHTML = Number(result.innerHTML) ? 'C' : 'AC';
        }
    });

    operators.forEach(operator => {
        operator.onclick = () => {
            isCalculating = true;
            calculateArr.push(result.innerHTML);
            if (operatorArr.length) {
                calculateArr.reduce((x, y, index) => {
                    currentNumber = operation[operatorArr[index - 1]](x, y);
                });
                result.innerHTML = currentNumber;
            }
            operatorArr.push(operator.innerHTML);

        }
    });

    document.getElementById('equal').onclick = () => {
        result.innerHTML = operation[operatorArr[0]](currentNumber, result.innerHTML);
    };
}