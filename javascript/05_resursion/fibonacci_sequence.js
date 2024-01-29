






function fibonacci_sequence(n){
    // console.log(n);
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    }else return fibonacci_sequence(n-1) + fibonacci_sequence(n-2);
}


for(let i = 0; i < 15 ; i++){
    console.log(fibonacci_sequence(i));
}
