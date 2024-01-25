//----------------------------------------------------------------------
//這個演算法是二分搜尋法（Binary Search）的一個例子，
//它用於在已排序的數組中快速查找一個特定的元素。這種方法比線性搜尋更高效，
//特別是在處理大型數據時。二分搜尋的基本思想是將搜尋範圍分成兩半，
//然後根據中間元素與目標值的比較結果來決定接下來搜尋的半邊。

let numbers = [
  9,
  12,
  15,
  18,
  19,
  20,
  22,
  25,
  26,
  26,
  33,
  37,
  38,
  41,
  47,
  47,
  50,
  55,
  57,
  60,
  68,
  80,
  87,
  90,
  98,
  100,
  103,
  108,
  109,
  109,
  116,
  120,
  120,
  124,
  127,
  128,
  131,
  135,
  135,
  139,
  143,
  145,
  151,
  155,
  156,
  158,
  163,
  164,
  165,
  169,
  169,
  173,
  174,
  176,
  177,
  178,
  181,
  182,
  182,
  183,
  184,
  189,
  192,
  195,
  200,
  201,
  203,
  204,
  207,
  213,
  217,
  222,
  222,
  222,
  227,
  228,
  233,
  235,
  237,
  239,
  239,
  243,
  248,
  251,
  252,
  257,
  260,
  260,
  263,
  268,
  270,
  271,
  271,
  276,
  281,
  284,
  285,
  295,
  297,
  298,
];

function binarySearch(arr, n) {
  let min = 0;
  let max = arr.length - 1;
  let step = 0;

  while (min <= max) {
    step++;
    let middle = Math.floor((max + min) / 2); //Math.floor 用於將一個給定的數字「向下取整」
    if (n > arr[middle]) {
      min = middle + 1;
    } else if (n < arr[middle]) {
      max = middle - 1;
    } else if (n === arr[middle]) {
      console.log("Found number " + n + " at position " + middle);
      console.log("Found it after " + step + " steps.");
      return middle;
    }
  }

  console.log("Cannot find number " + n);
  return -1;
}


binarySearch(numbers, 298); // 6 - 7
