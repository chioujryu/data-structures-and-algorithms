// ----------------------------------------------------------------
// 這是超爛的演算法，看過就好
// ----------------------------------------------------------------


// function bubbleSort(arr) {
//   let step = 0;
//   for (let i = 0; i <= arr.length - 2; i++) {
//     for (let j = arr.length - 1; j >= i + 1; j--) {
//       if (arr[j] < arr[j - 1]) {
//         // swap arr[j] and arr[j - 1]
//         let temp = arr[j];
//         arr[j] = arr[j - 1];
//         arr[j - 1] = temp;
//         step++;
//       }
//     }
//   }
//   console.log("It takes " + step + " steps to complete.");
//   console.log(arr);
// }

// let test = [];

// for (let i = 0; i < 100; i++) {
//   test.push(Math.floor(Math.random() * 100));
// }

// bubbleSort(test);


// bubbleSort([5,4,3,2,1]);
// // n = 5
// // 1/2 * n^2 - 1/2 * n
// // 25/2 - 5/2 = 10




// -----------------------------優化的方式-------------------------

// function bubbleSort(arr) {
//     let step = 0;
//     for (let i = 0; i <= arr.length - 2; i++) {
//         let swapping = false;
//         for (let j = arr.length - 1; j >= i + 1; j--) {
//             if (arr[j] < arr[j - 1]) {
//                 // swap arr[j] and arr[j - 1]
//                 let temp = arr[j];
//                 arr[j] = arr[j - 1];
//                 arr[j - 1] = temp;
//                 step++;
//                 swapping = true;
//                 console.log(arr);
//             }
//         }
//         if (swapping == false){
//             break;
//         }
//     }
//     console.log("It takes " + step + " steps to complete.");
//     console.log(arr);
//   }
  
//   let test = [];
  
//   for (let i = 0; i < 100; i++) {
//     test.push(Math.floor(Math.random() * 100));
//   }
  
//   bubbleSort([1,2,3,4,0,5]);