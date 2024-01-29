function recursive_sequence(n){
    console.log(`we are inside function recursive_sequence(${n})`);
    if(n==1){
        return 10;
    }else{
        return recursive_sequence(n-1)+15;
    }
}

console.log(recursive_sequence(3));

/**
 * recursive_sequence(3) -> recursive_sequence(2)
 * recursive_sequence(2) -> recursive_sequence(1)
 * recursive_sequence(1) -> 10
 * recursive_sequence(2) -> 10 + 15
 * recursive_sequence(3) -> 10 + 15 + 15
 */