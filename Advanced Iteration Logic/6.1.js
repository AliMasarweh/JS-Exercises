function accum(str) {
    const ans = [];
    for (let index = 0; index < str.length; ++index) {
        const char = str.charAt(index);
        ans.push(char.toUpperCase());
        for (let indexJ = 0; indexJ < index; indexJ++) {
            ans.push(char.toLowerCase());
        }
    }

    return ans.join('-');
}