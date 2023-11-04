# **Counter**



## **intersection_problem**
### **暴力搜索法**
```js
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
```
```
[ 1, 3 ]
```

這個函數的時間複雜度（Big O notation）是 O(n*m)，其中 n 是 arr1 的長度，m 是 arr2 的長度。這是因為函數中有兩個嵌套的 for 迴圈：外層迴圈遍歷 arr1，內層迴圈遍歷 arr2。對於 arr1 中的每個元素，內層迴圈都會遍歷 arr2 中的所有元素，因此總的迭代次數是兩個數組長度的乘積。

### **Counter 用法**
```js
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
```
```
{ '1': 2, '2': 1, '3': 2, '5': 1, '10': 1, '16': 2 }
[ '1', '3', '16' ]
```
這個函數的時間複雜度分析如下：

1. 合併兩個數組的時間複雜度是 O(n+m)，其中 n 是 arr1 的長度，m 是 arr2 的長度
2. 第一個 for 迴圈遍歷合併後的數組 arr3，時間複雜度是 O(n+m)。
3. 第二個 for 迴圈遍歷計數器對象的屬性，最壞情況下的時間複雜度是 O(n+m)，因為每個元素最多出現一次。

因此，整體的時間複雜度是 O(n+m) + O(n+m) + O(n+m) = O(n+m)，這是因為這三個操作是連續發生的，而不是嵌套的。

空間複雜度方面，我們需要額外的空間來儲存合併後的數組 arr3 和計數器 counter，所以空間複雜度也是 O(n+m)。

## **frequency problem**
「Frequency problem」通常指的是在一組數據中計算各個元素出現的頻率或次數的問題。這是數據分析和計算機科學中一個非常基本且常見的問題，因為它涉及到對數據集進行統計分析，以確定哪些元素是常見的，哪些是罕見的。

在最簡單的形式中，這個問題可以通過遍歷數據集並在一個計數器數據結構（如哈希表）中記錄每個元素出現的次數來解決。每當你遇到一個元素，你就增加它在計數器中的計數。

例如，假設你有一個包含學生名字的列表，你想知道哪個名字出現得最多。你可以使用「frequency problem」的解決方案來計算每個名字出現的次數，然後找出出現次數最多的名字。

這個問題在許多領域都非常重要，比如在數據庫管理、資訊檢索、自然語言處理等領域，了解元素的頻率可以幫助我們做出更好的決策，比如優化搜索算法或者理解文本內容。

### **example** 
這個 sameFrequency 函數的目的是檢查兩個字符串 str1 和 str2 是否有相同的字符頻率，即每個字符出現的次數是否相同。以下是對這個函數的逐行解釋：

```javascript
function sameFrequency(str1, str2){
    // 將兩個 str 換成 array
    let arr1 = str1.split("") // 將字符串 str1 分割成單個字符的數組 arr1。
    let arr2 = str2.split("") // 將字符串 str2 分割成單個字符的數組 arr2。

    counter1 = {}; // 創建一個空對象 counter1，用來記錄 str1 中每個字符出現的次數。
    counter2 = {}; // 創建一個空對象 counter2，用來記錄 str2 中每個字符出現的次數。

    // 遍歷 arr1，計算每個字符出現的次數。
    for (let i = 0; i < arr1.length; i++) {
        if (counter1[arr1[i]]){ // 如果 counter1 已經有了這個字符的記錄，
            counter1[arr1[i]]++; // 則將該字符的計數加一。
        } else{ // 如果沒有，
            counter1[arr1[i]] = 1; // 則在 counter1 中為這個字符創建一個新的記錄，並將其設為 1。
        };
    };

    // 遍歷 arr2，計算每個字符出現的次數，過程同上。
    for (let i = 0; i < arr2.length; i++) {
        if (counter2[arr2[i]]){
            counter2[arr2[i]]++;
        } else{
            counter2[arr2[i]] = 1;
        }
    };

    console.log(counter1, counter2); // 輸出 counter1 和 counter2，以便檢查每個字符的計數。

    // 遍歷 counter1 中的每個屬性（即字符）。
    for (let property in counter1){
        if (!counter2[property]){ // 如果 counter2 中沒有這個字符，
            return false; // 則返回 false。
        };
        if (counter2[property] !== counter1[property]) { // 如果這個字符在 counter2 中的計數與 counter1 不同，
            return false; // 也返回 false。
        };
    }

    return true; // 如果所有字符的計數都相同，則返回 true。
}

console.log(sameFrequency("aabc", "abbc")); // 輸出比較 "aabc" 和 "abbc" 是否有相同的字符頻率。
```
這個函數的時間複雜度是 O(n)，其中 n 是 arr1 和 arr2 中較長的那個的長度。這是因為每個循環都分別遍歷了一次數組，而 for-in 循環的次數取決於 counter1 中不同字符的數量。然而，由於前面提到的錯誤，這個函數可能不會正確工作，因為第二個循環應該遍歷 arr2.length。


