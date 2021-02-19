function abbreviate(str) {
    return str.split(' ').map(name => name.charAt(0).toUpperCase())
                        .reduce((acc, val)=> acc+val, '');
}