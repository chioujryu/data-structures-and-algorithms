// 1+2+3+......+n = sum

function fun1(n){
    let sum = 0;
    for(i = 0; i <= n ;i++){
        sum += i;
    }
    return sum;
}

function fun2(n){
    return((1 + n) * n) / 2;
}

console.time('for-loop-time');
console.log(fun1(100));
console.timeEnd('for-loop-time');

console.time('for-loop-time');
console.log(fun2(100));
console.timeEnd('for-loop-time');
