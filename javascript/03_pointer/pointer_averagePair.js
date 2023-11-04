averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);

function averagePair(arr, avg){
    let result = [];
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = i + 1; j < arr.length; j++){
            if ((arr[i] + arr[j])/2 == avg){
                result.push([arr[i], arr[j]]);
            }
        }
    }
    console.log(result);
    return result;
}


averagePair_using_pointer([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);

function averagePair_using_pointer(arr, avg){
    let left_index = 0;
    let right_index = arr.length - 1;
    let result = [];

    while (right_index > left_index){
        let temp_avg = (arr[left_index] + arr[right_index]) / 2;
        if (temp_avg > avg){
            right_index--;
        }else if (temp_avg < avg){
            left_index++;
        }else if (temp_avg == avg){
            result.push([arr[right_index], arr[left_index]]);
            right_index--;
            left_index++;
        }
    }
    console.log(result);
};