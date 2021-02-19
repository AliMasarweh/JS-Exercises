function fib(n) {
    let ans = 1, prev = 1;
    for (let index = 0; index <= n-2; index++) {
        ans += prev;
        prev = ans - prev;
    }

    return ans;
}