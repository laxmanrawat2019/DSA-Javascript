function getString(str) {
    let map = {};
    str.split("").forEach(element => {
        map[element] = map[element] ? map[element] + 1 : 1;
    });
    //console.log("map",map);
    let max = 1;
    char = str[0];
    for (let key in map) {
        if (map[key] > max) {
            max = map[key];
            char = key;
        }
        //console.log("key..........", key);
    }
    return char;
}

const result = getString("ankita");
console.log(result);