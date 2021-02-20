function filter(array, callBack) {
    let ans = [];
    for (let index = 0; index < array.length; index++) {
        callBack(array[index]) && ans.push(array[index]);   
    }

    return ans;
}
