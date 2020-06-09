// 使用WeakMap以弱關聯(weak reference)方式儲存物件
function deepCopy(obj, cache = new WeakMap()) {
    // primitive type 和 function
    if (obj == null || typeof (obj) !== 'object') {
        return obj;
    }
    // 特別處理正則表示式，取得建構式並重新建構物件
    if (obj instanceof RegExp) {
        return obj.constructor(obj);
    }
    // 特別處理 Date，重新建構物件
    if (obj instanceof Date) {
        return new Date(obj);
    }
    // 如果WeakMap已經有此物件，則直接取出回傳
    if (cache.has(obj)) {
        return cache.get(obj);
    }
    // 依原始物件型別建立一新物件，並放入WeakMap以建立新物件
    const copy = new obj.constructor;
    cache.set(obj, copy);
    // 所有的屬性和Symbol依序遞迴拷貝
    [...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj)].forEach(key => {
        copy[key] = deepCopy(obj[key], cache);
    });

    return copy;
}

var a = { name: 'Peter', func: function () { } };

console.log(a);
console.log(deepCopy(a));
console.log(a === deepCopy(a));

var date = new Date();
console.log(date);
console.log(deepCopy(date));
console.log(date === deepCopy(date));
console.log(typeof (date));
console.log(typeof (deepCopy(date)));