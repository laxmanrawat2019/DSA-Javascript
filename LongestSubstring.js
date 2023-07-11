var lengthOfLongestSubstring = function (str) {
    if (!str) {
        return 0;
    }
    let end = 0;
    let start = 0;
    let maxlength = 0;
    const Uniquecharacters = new Set();
    while (end < str.length) {
        if (!Uniquecharacters.has(str[end])) {
            Uniquecharacters.add(str[end]);
            end++;
            maxlength = Math.max(maxlength, Uniquecharacters.size);

        }
        else {
            Uniquecharacters.delete(str[start]);
            start++;

        }
    }
    return maxlength;
}

const result = lengthOfLongestSubstring('abcabcbb');
console.log(result);