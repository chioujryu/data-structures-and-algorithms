//------------------------------------------------------------
// 這個演算法是用來找出給定字符串中最長的不包含重複字符的子字符串的長度。
// 它使用「滑動窗口」的技巧來有效地解決這個問題。
//------------------------------------------------------------


function unique_biggest_letter_string(str){
    let arr = str.split('');
    let start = 0;
    let end = 0;
    let counter = {};
    let biggest_length = -Infinity;

    

    // counter[arr[start]] = 1;

    while (end < arr.length){

        console.log(counter);

        if(counter[arr[end]]){ 
            counter[arr[start]]-- 
            start++;
        }else{
            counter[arr[end]] = 1;
            end++
            if (biggest_length < end - start){
                biggest_length = end - start;
            }
            
        }
    }

    if (biggest_length === -Infinity){
        console.log("Cannot find unique letters substring");
        return null;
    }

    console.log(counter);
    console.log(biggest_length);

}


console.log(unique_biggest_letter_string("thisishowwedoit")); // 6

// console.log(unique_biggest_letter_string("thiszxcvbnmasdfghjqwertyishowwedoit")); // 6