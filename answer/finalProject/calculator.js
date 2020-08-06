// 計算機主程式
class Calculator {
    // 所有的數字按鈕DOM物件
    numbers = document.querySelectorAll('.number');
    // 加減乘除按鈕DOM物件
    operators = document.querySelectorAll('.operator');
    // 呈現結果的span DOM物件
    result = document.getElementById('result');
    // 清空鍵DOM物件
    acButton = document.getElementById('AC');
    // 計算紀錄清單DOM物件
    recordsList = document.getElementById('recordList');
    // 使用者輸入的數字
    calculateArr = [];
    // 使用者選的計算符
    operatorArr = [];
    // 是否為計算狀態
    isCalculating = false;
    // 是否為新數字
    isNew = false;
    // 計算紀錄
    records = [];
    // 當下數字
    currentNumber = 0;

    // 統一控管計算符
    operation = {
        '+': (x, y) => Number(x) + Number(y),
        '-': (x, y) => Number(x) - Number(y),
        'x': (x, y) => Number(x) * Number(y),
        '÷': (x, y) => Number(x) / Number(y)
    }

    // 初始
    init = () => {

        // 清空
        this.acButton.onclick = () => {
            result.innerHTML = '0';
            acButton.innerHTML = 'AC';
            calculateArr = [];
            operatorArr = [];
            isCalculating = false;
            currentNumber = 0;
        }

        // 正負號
        document.getElementById('negative').onclick = () => {
            let value = this.result.innerHTML;
            if (value.startsWith('-')) {
                this.result.innerHTML = value.substr(1, value.length);
            } else {
                this.result.innerHTML = '-' + value;
            }
        }

        // 百分比
        document.getElementById('percent').onclick = () => {
            this.result.innerHTML = Number(this.result.innerHTML) / 100;
        }

        // 小數點
        document.getElementById('point').onclick = () => {
            if (this.result.innerHTML.indexOf('.') < 0)
                this.result.innerHTML += '.';
        }

        // 數字按鍵事件註冊
        this.numbers.forEach(number => {
            let _self = number;
            _self.onclick = () => {
                if (!Number(this.result.innerHTML) && this.result.innerHTML.indexOf('.') < 0 && !this.isCalculating || this.isNew) {
                    this.result.innerHTML = _self.id;
                } else {
                    this.result.innerHTML += _self.id;
                }
                this.acButton.innerHTML = Number(this.result.innerHTML) ? 'C' : 'AC';
                this.isNew = false;
            }
        });

        // 計算符按鍵事件註冊
        this.operators.forEach(operator => {
            operator.onclick = () => {
                this.calculateArr.push(result.innerHTML);
                this.isCalculating = true;
                this.currentNumber = result.innerHTML;
                if (this.operatorArr.length) {
                    let last = 0;
                    this.calculateArr.forEach((cal, index) => {
                        if (index) {
                            this.currentNumber = this.operation[this.operatorArr[index - 1]](last, cal);
                            last = this.currentNumber;
                        } else {
                            last = Number(cal);
                        }
                    });
                    this.result.innerHTML = this.currentNumber;
                }
                this.operatorArr.push(operator.innerHTML);
                this.isNew = true;
            }
        });

        // 等號按鈕事件註冊
        document.getElementById('equal').onclick = () => {
            // 呈現結果
            this.calculateArr.push(this.result.innerHTML);
            const calResult = this.operation[this.operatorArr[this.operatorArr.length - 1]](this.currentNumber, this.result.innerHTML);
            this.result.innerHTML = calResult;

            // 產生紀錄的DOM物件
            let li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = this.setRecord(calResult);

            // 如果紀錄多於3筆
            if (this.records.length >= 3) {
                this.records.splice(0, 1);
            }
            this.records.push(li);

            // 設定值還原
            this.isCalculating = false;
            this.isNew = true;
            this.calculateArr = [];
            this.operatorArr = [];
            this.currentNumber = 0;
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
            // records.reverse().reduce((promise, current) => promise.then(() => {
            //     return new Promise(res => {
            //         setTimeout(() => {
            //             recordsList.appendChild(current);
            //             res();
            //         }, 1000);
            //     });
            // }), Promise.resolve());

            // 作法 2: 使用async、await
            const asyncFunc = async (dataArr) => {
                for (const data of dataArr) {
                    await new Promise(res => {
                        setTimeout(() => {
                            this.recordsList.appendChild(data);
                            res();
                        }, 1000);
                    });
                }
            }
            asyncFunc(this.records.slice().reverse());
        };
    }

    // 算式字串串接
    setRecord = (result) => {
        let record = '';
        this.calculateArr.forEach((cal, index) => {
            record = record + cal + ' ' + (this.operatorArr[index] ? this.operatorArr[index] + ' ' : ' ');
        });
        record = record + '= ' + result;
        return record;
    }

}

export { Calculator };