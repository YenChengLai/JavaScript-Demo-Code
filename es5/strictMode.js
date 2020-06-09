// 宣告在檔案前為全域的嚴格模式
// 'use strict';
// name = 4;

console.log(this);

function printThis() {
    console.log(this);
}

printThis();

function strictThis() {
    // 宣告在function內則僅在該function中為嚴格模式
    'use strict';
    console.log(this);
}

strictThis();