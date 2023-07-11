function isCheckSquare(array1, array2) {
    let map1 = {};
    let map2 = {};
    for (let item of array1) {
        map1[item] = (map1[item] || 0) + 1;
    }
    for (let item1 of array2) {
        map2[item1] = (map2[item1] || 0) + 1;
    }
    for (let keys in map1) {
        //console.log("Laxman",(keys*keys));
        if (!map2[keys * keys]) {
            return false;
        }
        //console.log("Vikrant",map2[keys*keys]);
        if (map1[keys] !== map2[keys*keys]) {
            return false;
        }
        
    }
    return true;
}
const result = isCheckSquare([1, 2, 3, 4], [1, 4, 9, 16]);
console.log(result);