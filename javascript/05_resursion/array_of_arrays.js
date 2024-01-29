let arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];

// -----------------------比較棒的寫法------------------------

// function collector(arr1) {
//   let result = [];
//   helper(arr1);
//   return result;

//   function helper(arr2) {
//     for (let i = 0; i < arr2.length; i++) {
//       if (Array.isArray(arr2[i])) {
//         helper(arr2[i]);
//       } else {
//         result.push(arr2[i]);
//       }
//     }
//   }
// }

// console.log(collector(arrs));
// console.log(result);

// ----------------------- 簡單的寫法-----------------------

let result = [];

function collector(arrs){
  for (let i = 0 ; i < arrs.length; i++) {
    if (Array.isArray(arrs[i])) {
      collector(arrs[i]);
    } else {
      result.push(arrs[i]);
    }
  }
  // console.log(arrs);
}



console.log(collector(arrs));
console.log(result);