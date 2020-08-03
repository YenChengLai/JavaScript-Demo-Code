window.onload = () => {
    new Calculator().init();
}

function Calculator() {

    const numbers = document.querySelectorAll('.number');
    const operators = document.querySelectorAll('.operator');
    const result = document.getElementById('result');
    const acButton = document.getElementById('AC');
    const recordsList = document.getElementById('recordList');
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

    this.init = () => {
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
            calculateArr.push(result.innerHTML);
            const calResult = operation[operatorArr[operatorArr.length - 1]](currentNumber, result.innerHTML);
            result.innerHTML = calResult;
            this.setRecords(calResult);
            isCalculating = false;
            isNew = true;
            calculateArr = [];
            operatorArr = [];
            currentNumber = 0;
        };

        document.getElementById('getRecord').onclick = () => {
            console.log(this.getRecords()); // 取得所有紀錄的方法
            // 請由此開始作答
            const promise = new Promise((res, rej) => {
                setTimeout(() => {
                    resolve();
                }, 2000);
            });
        };
    }

    this.getRecords = () => records;

    this.setRecords = (result) => {
        let record = '';
        calculateArr.forEach((cal, index) => {
            record = record + cal + ' ' + (operatorArr[index] ? operatorArr[index] + ' ' : ' ');
        });
        record = record + '= ' + result;
        records.push(record);
    }

}