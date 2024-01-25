// maxSum([2,7,3,0,6,1,-5,-12,-11],3); //12
// minSum([2,7,3,0,6,1,-5,-12,-11],3); //-28

// function maxSum(arr, window_size){
//     let max_value = -Infinity;

//     if (window_size > arr.length){
//         console.log("window_size > arr.length");
//         return null;
//     };

//     for(let i = 0; i <= arr.length - window_size; i++){
//         let attempt = 0;
//         for(let j = i; j < i + window_size; j++){
//             // console.log(arr[i], arr[j]);
//             attempt += arr[j];
//         };
//         if (attempt > max_value){
//             max_value = attempt;
//         }
//         // console.log(max_value)
        
//     };
//     console.log(max_value)
//     return max_value;
// }

// function minSum(arr, window_size){
//     let min_value = Infinity;

//     if (window_size > arr.length){
//         return null;
//     }

//     for(let i = 0; i <= arr.length - window_size; i++){
//         let attempt = 0;

//         for(let j = i; j < i + window_size; j++){
//             attempt += arr[j];
//         }
//         if(attempt < min_value){
//             min_value = attempt;
//         }
//         // console.log(min_value)
//     }
//     console.log(min_value)

//     return min_value;
// }



// ---------------------------------------------------------------------------- //
// 比較好的演算法如下，速度比較快
// ---------------------------------------------------------------------------- //

maxSum([2,7,3,0,6,1,-5,-12,-11],3); //12
minSum([2,7,3,0,6,1,-5,-12,-11],3); //-28

function maxSum(arr, window_size){
    if(window_size > arr.length){
        console.log(null);
        return null;
    }

    let max_value = 0;
    for(let i = 0; i < window_size; i++){
        max_value += arr[i];
    } 
    // console.log(max_value);

    let tem_value = max_value;
    for(let j = window_size; j < arr.length; j++){
        tem_value = tem_value + arr[j] - arr[j - window_size];
        if (tem_value > max_value){
            max_value = tem_value;
        }
    }   

    console.log("最大值 = ",max_value);
    return max_value
}

function minSum(arr, window_size){
    if (window_size > arr.length){
        console.log("window size is bigger than arr length")
        return null;
    }

    let min_value = 0;
    for (let i = 0;i < window_size; i++){
        min_value += arr[i];
    }
    console.log("初始最小值", min_value);

    for (let j = window_size; j < arr.length; j++){
        next_value = min_value + arr[j] - arr[j - window_size];
        if (next_value < min_value){
            min_value = next_value;
        }
    }

    console.log("最小值 = ", min_value);
    return min_value;
}