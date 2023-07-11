function findOdd(array) {
    let result = [];
    function helperRecursive(inputArray) {
        console.log("calling function.........");
        if (inputArray.length === 0) {
            return;
        }
        if (inputArray[0] % 2 !== 0) {
            result.push(inputArray[0]);
        }
        helperRecursive(inputArray.slice(1));//recursively calling
    }
    helperRecursive(array);//first time calling function
    return result;

}

const res = findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(res);