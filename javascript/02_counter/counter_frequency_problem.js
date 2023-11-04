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
