function maskify(str) {
    return '#'.repeat(Math.max(0, str.length-4)) + ''.slice(Math.max(str.length-4, 0));
}