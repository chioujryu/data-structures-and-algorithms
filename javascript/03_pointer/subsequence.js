//---------------------------------------------------------//
// 「子序列」。 sequence 之中，依照由左到右的順序，挑幾個數字出來，
// 就是 subsequence 。其中 sub- 的意思是「附屬、次要」。
// 
// 例如 1 3 5 2 9 的其中一個子序列是 3 9 。
// 例如 1 3 5 2 9 的其中一個子序列是 1 5 2 9 。
// 空集合（不取）、原序列（全取），都是子序列！
// 
// 衍生筆記: https://web.ntnu.edu.tw/~algo/Subsequence.html
//---------------------------------------------------------//


isSubsequence("hello", "hello Dear");
isSubsequence("book", "brooklyn");
isSubsequence("abc", "bac");
isSubsequence("abc", "abc");
isSubsequence("", "abc");


function isSubsequence(str1, str2){

    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer2 < str2.length){
        if (str1[pointer1] == str2[pointer2]){
            pointer1++;
        }
        if (pointer1 >= str1.length){
            console.log("true");
            return true;
        }
        pointer2++;
    }
    console.log("false");
    return false;
};