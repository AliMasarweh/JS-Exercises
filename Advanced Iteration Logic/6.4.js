function isIsogram(str) {
    const setOfChars = new Set();
    for(const char of str) {
        if(setOfChars.has(char)) 
            return false;
        
        setOfChars.add(char);
    }

    return false;
}