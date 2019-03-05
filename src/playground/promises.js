const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is my resolved data');
        //reject('something went wrong');
    }, 1500);
});

console.log('before');
promise.then((data) => {
    console.log('1', data);

    return new Promise((resolve) => {
    setTimeout(() => {
        resolve('this is second promise');
    }, 2500);
});
}).then((str) => {
    console.log('does this run ?', str);
}).
catch((error) => {
    console.log('error = ', error);
});
console.log('after');