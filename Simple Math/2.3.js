function findNextSquare(num) {
    let root = Math.root(num);
    if(Math.isInteger(root))
        return (root+1)*(root+1);

    return -1;
}