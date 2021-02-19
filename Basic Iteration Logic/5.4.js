function toWeirdCase(str) {
    let ans = [];
    const funcs = [
        (char) => char.toUpperCase(),
        (char) => char.toLowerCase(),
    ];

    for (let i = 0; i < str.length; ++i) {
        ans.push(funcs[i%funcs.length] (str.charAt(i)));
    }

    return ans.join();
}