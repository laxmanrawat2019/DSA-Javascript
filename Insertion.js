const array = [8, 2, 4, 1, 3];
const sorted = (array) => {
    for (let i = 1; i < array.length; i++) {
        //console.log('caling function i value.............'+i);
        let current = array[i];
        let j = i - 1;
        //console.log('caling function j value.............'+j);
        console.log('current value .................',current);
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;//[2,8,4,1,3]
    }
    return array;
}

const result = sorted(array);
console.log(result);