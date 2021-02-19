function repeatStr(repeats, str) {
    let ans = [];
    while(repeats--) {
        ans.push(str);
    }

    return ans.join();
}