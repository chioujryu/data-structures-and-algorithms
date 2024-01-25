//---------------------------------------------------------//
// 「迴文」。中文當中是指倒正著念和反著念都相同的句子，
// 前後對稱，例如「上海自來水來自海上」。英文當中是指正著看和反著看都相同的單字，例如「 madam 」。
// 
// 衍生筆記: https://web.ntnu.edu.tw/~algo/Palindrome.html
//---------------------------------------------------------//


palindrome("tacocat");
palindrome("amanaplanacanalpanama");
palindrome("asdfsafeaw");



function palindrome(str){
    let left = 0;
    let right = str.length -1;  // 取得最後一個字母的 index
    while (left <= right){
        if (str[left] == str[right]){
            left++;
            right--;
        }else{
            console.log("false");
            return false;
        }
    }

    console.log("ture");
    return true;
}