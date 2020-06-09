const func1 = _ => {
    return new Promise((res, rej) => {
        res('1 實現');
    });
};

const func2 = _ => {
    return new Promise((res, rej) => {
        res('2 實現');
    });
}

async function asyncCall() {
    console.log('start');
    let result;
    result = await func1();
    console.log(result);
    result = await func2();
    console.log(result);
    console.log('end');
}

asyncCall();