const axios = require('axios');

let name = 'Peter';

let a = name => {
    console.log(name); // console.log為 I/O，影響外部狀態
    return name;
}

let b = newName => {
    name = newName;    // 改變外部全域變數內容
    return name;
}

let c = id => document.getElementById(id).value; // 調用DOM元素

let d = url => axios.get(url)
    .then(response => { // 發出HttpRequest
        console.log(response.data.map(x => x.name));
    }
);

let e = name => `Hello, ${name}.`; 