// function IsPalindrome(strings)
// {
//   let reverse_str = strings.split("").reverse().join("");
//   //return reverse_str.toLowerCase();
//   return reverse_str.toLowerCase()===strings.toLowerCase();
// }

function IsPalindrome(str) {
    let NewString = str.toLowerCase();
    //return NewString;
    let left = 0;
    let right = NewString.length - 1;
    while (left < right) {
        if (NewString[left] !== NewString[right]) {
            return false;
        }
        left++;
        right--;

    }
    return true;
}


const result = IsPalindrome('Laxman');
console.log(result);