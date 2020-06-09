function Singleton() {

    // 如果不用new，this會指向全域物件
    if (!(this instanceof Singleton)) {
        throw new Error('請用new建立物件');
    }

    // function也是物件，取得function的instance屬性
    var instance = Singleton.instance;
    if (typeof (instance) == 'object') {
        return instance;
    }

    // this代指new出來的物件，將它存在function的instance屬性中
    Singleton.instance = this;
}

var s1 = new Singleton();
var s2 = new Singleton();
console.log(s1 === s2);
var s3 = Singleton();