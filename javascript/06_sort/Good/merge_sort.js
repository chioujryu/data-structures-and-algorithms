// function merge(a1, a2) {
//   let result = [];
//   let i = 0;
//   let j = 0;

//   while (i < a1.length && j < a2.length) {
//     if (a1[i] > a2[j]) {
//       result.push(a2[j]);
//       j++;
//     } else {
//       result.push(a1[i]);
//       i++;
//     }
//   }

//   // a1 or a2 might have some elements left
//   // use loop to put them all into result

//   while (i < a1.length) {
//     result.push(a1[i]);
//     i++;
//   }
//   while (j < a2.length) {
//     result.push(a2[j]);
//     j++;
//   }

//   return result;
// }

// function mergeSort(arr) {
//   if (arr.length === 1) {
//     return arr;
//   } else {
//     let middle = Math.floor(arr.length / 2);
//     let left = arr.slice(0, middle);
//     let right = arr.slice(middle, arr.length);
//     return merge(mergeSort(right), mergeSort(left));
//   }
// }


function merge(arr1,arr2){
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length){
    // console.log(result)
    if (arr1[i] > arr2[j]){
      result.push(arr2[j]);
      j++;

      // if (j === arr2.length){
      //   result.push(...arr1);
      // }

    } else{
      result.push(arr1[i]);
      i++;

      // if (i === arr1.length){
      //   result.push(...arr2);
      // }
    }
  }

  // a1 or a2 might have some elements left
  // use loop to put them all into result

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}


function mergeSort(arr){
  if (arr.length === 1){
    return arr;
  }else{
    let middle = Math.floor(arr.length / 2);  // 向下取整
    let left_arr = arr.slice(0, middle);
    let right_arr = arr.slice(middle, arr.length);
    return merge(mergeSort(left_arr), mergeSort(right_arr))
  }
}

// console.log(merge([11],[1]));




console.log(mergeSort([15, 3, 17, 18, 35, 11, 0, 36, -336, 1054]));

