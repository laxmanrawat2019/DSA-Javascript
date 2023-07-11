function searchalog(array, number) {
    let min = 0;
    let max = array.length - 1;
    while (min <= max) {
        let midIndex = Math.floor((min + max) / 2);

        //console.log(array[midIndex]);return false;
        console.log('midIndex '+midIndex+' min '+min+' max '+max);
        if (array[midIndex] < number) {
            min = midIndex + 1;
        }
        else if (array[midIndex] > number) {
            max = midIndex - 1;
        }
        else {
             return midIndex;
        }
    }
    return -1;
}

const result =  searchalog([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],7)
console.log(result);