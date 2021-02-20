function countDups(str) {
    const firstOccuranceSet = new Set();
    const duplicates = new Set();

    for (const char of str) {
        if(firstOccuranceSet.has(char)) {
            duplicates.add(char);
        } else
        firstOccuranceSet.add(char);
    }

    return duplicates.size();
}  