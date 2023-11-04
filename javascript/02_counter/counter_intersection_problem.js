function intersection(arr1, arr2){
    let result = [] // 定義一個新的數組來儲存交集結果

    // 外層迴圈遍歷第一個數組 arr1
    for(let i = 0; i < arr1.length; i++){
        // 內層迴圈遍歷第二個數組 arr2
        for(let j = 0; j < arr2.length; j++){
            // console.log(arr1[i], arr2[j]) // 在控制台輸出當前遍歷的元素

            // 檢查當前遍歷到的兩個數組的元素是否相等
            if(arr1[i] == arr2[j]){
                // 如果相等，則將該元素添加到 result 數組中
                result.push(arr1[i])
            }
        }
    }
    console.log(result); // 在控制台輸出最終的交集結果
    return result; // 返回交集結果數組
}
// 呼叫函數並傳入兩個數組作為參數
intersection([1,2,3],[5,16,10,16,3,1]);



function intersection_using_counter(arr1, arr2){
    let result = [] // 定義一個新的數組來儲存交集結果
    let arr3 = arr1.concat(arr2); // 將兩個數組合併成一個新的數組 arr3
    let counter = {} // 定義一個對象來作為計數器

    // 遍歷合併後的數組 arr3
    for (let i = 0; i < arr3.length; i++){
        // 如果計數器中沒有當前元素，則添加進去並設置計數為 1
        if(!counter[arr3[i]]){
            counter[arr3[i]] = 1;
        } else {
            // 如果計數器中已經有了當前元素，則將計數加 1
            counter[arr3[i]]++;
        }
    }
    console.log(counter); // 在控制台輸出計數器的內容
    
    // 遍歷計數器的屬性
    for (let property in counter){
        // 如果某個元素的計數大於等於 2，表示它在兩個數組中都出現過
        if (counter[property] >= 2){ 
            result.push(property); // 將這個元素添加到結果數組中
        }
    }
    console.log(result); // 在控制台輸出最終的交集結果
    return result; // 返回交集結果數組
}

// 呼叫函數並傳入兩個數組作為參數
intersection_using_counter([1,2,3],[5,16,10,16,3,1]);
