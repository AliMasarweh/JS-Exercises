function binaryArrToDecimal(arr) {
    let ans = 0;
    for (const number of arr) {
        ans = ans*2 + number;
    }

    return ans;
}