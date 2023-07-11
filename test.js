function BubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    console.log('calling bubble function................' + i);
    let isSwapped;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        //console.log('Before swapping',[array[j],array[j+1]]);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        isSwapped = true;
        //console.log('After swapping',[array[j+1],array[1]]);
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  return array;
}
const result = BubbleSort([1, 4, 2, 6, 8, 9, 5]);
console.log(result);