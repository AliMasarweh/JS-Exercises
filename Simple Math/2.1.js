function simOfLowestNumbers(numbers) {
    let absMin = Infinity, secAbsMin = Infinity;

    for (const number of numbers) {
        if(number < absMin) {
            secAbsMin = absMin;
            absMin = number;
        } else if(number < secAbsMin)
            secAbsMin = number;
    }

    return absMin + secAbsMin;
}
