let n = 10;
let arr = [1,2,3,4,5];

for (let i = 0; i < n; i++){ // O(n)
    arr.unshift(10); // O(n)
}   // O(n^2)

console.log(arr);