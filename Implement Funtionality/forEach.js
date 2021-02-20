function forEach(array, callBack) {
    for (let index = 0; index < array.length; index++) {
        callBack(array[index]);
    }
}