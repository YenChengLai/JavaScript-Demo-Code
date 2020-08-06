// 畫面載入
window.onload = () => {
    new Calculator().init();
}

// 計算機主程式
function Calculator() {
    // 所有的數字按鈕DOM物件
    const numbers = document.querySelectorAll('.number');
    // 加減乘除按鈕DOM物件
    const operators = document.querySelectorAll('.operator');
    // 呈現結果的span DOM物件
    const result = document.getElementById('result');
    // 清空鍵DOM物件
    const acButton = document.getElementById('AC');
    // 計算紀錄清單DOM物件
    const recordsList = document.getElementById('recordList');
    // 使用者輸入的數字
    let calculateArr = [];
    // 使用者選的計算符
    let operatorArr = [];
    // 是否為計算狀態
    let isCalculating = false;
    // 是否為新數字
    let isNew = false;
    // 計算紀錄
    const records = [];
    // 當下數字
    let currentNumber = 0;

    // 統一控管計算符
    const operation = {
        '+': (x, y) => Number(x) + Number(y),
        '-': (x, y) => Number(x) - Number(y),
        'x': (x, y) => Number(x) * Number(y),
        '÷': (x, y) => Number(x) / Number(y)
    }

    // 初始
    this.init = () => {

        // 清空
        acButton.onclick = () => {
            result.innerHTML = '0';
            acButton.innerHTML = 'AC';
            calculateArr = [];
            operatorArr = [];
            isCalculating = false;
            currentNumber = 0;
        }

        // 正負號
        document.getElementById('negative').onclick = () => {
            let value = result.innerHTML;
            if (value.startsWith('-')) {
                result.innerHTML = value.substr(1, value.length);
            } else {
                result.innerHTML = '-' + value;
            }
        }

        // 百分比
        document.getElementById('percent').onclick = () => {
            result.innerHTML = Number(result.innerHTML) / 100;
        }

        // 小數點
        document.getElementById('point').onclick = () => {
            if (result.innerHTML.indexOf('.') < 0)
                result.innerHTML += '.';
        }

        // 數字按鍵事件註冊
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

        // 計算符按鍵事件註冊
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

        // 等號按鈕事件註冊
        document.getElementById('equal').onclick = () => {
            // 呈現結果
            calculateArr.push(result.innerHTML);
            const calResult = operation[operatorArr[operatorArr.length - 1]](currentNumber, result.innerHTML);
            result.innerHTML = calResult;

            // 產生紀錄的DOM物件
            let li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = this.setRecord(calResult);

            // 如果紀錄多於3筆?
            records.push(li);

            // 設定值還原
            isCalculating = false;
            isNew = true;
            calculateArr = [];
            operatorArr = [];
            currentNumber = 0;
        };

        // 取得資料按鍵事件註冊
        document.getElementById('getRecord').onclick = () => {
            document.querySelectorAll('.list-group-item').forEach((ele, index) => {
                if (index) {
                    ele.remove();
                }
            });
            
            // 請由此開始作答

            // 作法 1: 使用Promise
            

            // 作法 2: 使用async、await
            
        };
    }

    // 算式字串串接
    this.setRecord = (result) => {
        let record = '';
        calculateArr.forEach((cal, index) => {
            record = record + cal + ' ' + (operatorArr[index] ? operatorArr[index] + ' ' : ' ');
        });
        record = record + '= ' + result;
        return record;
    }

}