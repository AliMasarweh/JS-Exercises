function findUniq(numbers) {
    if(numbers[0] == numbers[1])
        return numbers[2];
    else if(numbers[0] == numbers[2])
        return numbers[1];
    return numbers[0];
}