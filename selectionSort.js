function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            console.log('calling array ...............',array);
            console.log('calling j array. ............',array[j]);
            console.log('calling i array ............', array[i]);
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (i !== min) {
            temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}

const result = selectionSort([0, 2, 34, 22, 10, 19]);
console.log(result);