function b() {
    console.log(name);
}

function a() {
    var name = 'Peter';
    b();
}

var name = 'John';
a();