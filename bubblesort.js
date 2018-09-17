function bubbleSort (arr) {
    let swap = 0;

    while (swap !== 0) {
        
    }

    for (var i = 1; i<arr.length; i++) {
        let index1 = i-1;
        let index2 = i;
        let num1 = arr[i-1];
        let num2 = arr[i];
        if (num1 > num2) {
            swap(num1, num2, index1, index2);
        }
    }
}

function swap (num1,num2, index1, index2) {
    arr[index2] = num1;
    arr[index1] = num2;
}


// [2,3,1,4]
// [3,2,1,4]