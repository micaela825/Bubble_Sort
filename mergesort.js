function split(wholeArray) {
    let firstHalf = wholeArray.splice(0,Math.ceil(wholeArray.length/2))
    let secondHalf = wholeArray;
    return [firstHalf, secondHalf];
 }
 
 function merge(arr1, arr2) {
     let mergedArr = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            mergedArr.push(arr1.shift());
        } else
        mergedArr.push(arr2.shift())
    }
    return [...mergedArr, ...arr1, ...arr2];
 }
 
 function mergeSort(arr) {
    let arrsToSplit = [arr];
    let dividedArr = [];

    if (arr.length < 2) {
        return arr;
    }

    while (arrsToSplit.length) {
            [first, second] = split(arrsToSplit.shift());
            if (first.length === 1) {
                dividedArr.push(first)
            } else {
                arrsToSplit.push(first)
            }
            if (second.length === 1) {
                dividedArr.push(second)
            } else {
                arrsToSplit.push(second)
            }
        }
    return dividedArr;
 }
