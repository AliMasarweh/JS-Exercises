function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

function toCamelCase(str) {
    let char = '_';
    if(str.indexOf('_') == -1)
        char = '-';

    let ans = str.split(char);
    for (let index = 1; index < ans.length; index++) {
        ans[index] = capitalize(ans[index]);
    }

    return ans;
}