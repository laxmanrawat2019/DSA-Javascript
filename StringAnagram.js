function isAnagram(string1, string2) {
    if (string1.length != string2.length) {
        return false;
    }
    let counter = {};
    for (let letters of string1) {
        counter[letters] = (counter[letters] || 0) + 1;
    }
    //console.log(counter);
    for (let items of string2) {
        if (!counter[items]) {
            //console.log('Laxman');
            return false;
        }
        
        counter[items] -= 1;
        console.log(counter);
        
    }

    return true;

}

const result = isAnagram('Laxman', 'Laxman');
console.log(result);