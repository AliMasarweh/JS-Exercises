function map(array, callBack) {
    for (let index = 0; index < array.length; index++) {
        array[index] = callBack(array[index]);   
    }

    return array;
} 