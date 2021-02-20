function organize(s1, s2) {
    const setOfChars = new Set();

    for(const char of s1) {
        setOfChars.add(char);
    }

    for(const char of s2) {
        setOfChars.add(char);
    }

    let ans = [...setOfChars].sort((a,b) => a<b? -1: a>b? 1: 0);
    return ans;
}