//------------------------------------------------------------
// 這個演算法的目的是找出在一個整數數組中，其和至少等於一個給定值的最短子數組的長度。
// 這種類型的問題通常用「滑動窗口」技巧來解決。
//------------------------------------------------------------

min_subarray_length([8,1,6,15,3,16,5,7,14,30,12], 60);

function min_subarray_length(arr, sum){
    let left_index = 0;
    let right_index = 0;
    let min_subarray_length = Infinity;
    let current_subarray_sum = 0;

    while (right_index < arr.length){
        current_subarray_sum += arr[right_index];

        while (current_subarray_sum > sum)
        {
            // update the value of min_subarray_length
            if (min_subarray_length > right_index - left_index + 1){
                min_subarray_length = right_index - left_index + 1;
            }
            current_subarray_sum -= arr[left_index];
            left_index++;
        }

        right_index++;
    }

    if (min_subarray_length == Infinity){
        return 0;
    } else {
        return min_subarray_length;
    }
}


console.log(min_subarray_length([8,1,6,15,3,16,5,7,14,30,12], 60));
console.log(min_subarray_length([9,8,1,4,9,5,1,2], 11));
console.log(min_subarray_length([0,0,0,0,0,0,0,0], 11));