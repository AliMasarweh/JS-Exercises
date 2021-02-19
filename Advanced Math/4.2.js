function trib(n, sig) {
    for (let index = 0; index <= n-3; index++) {
        let tmpSig = sig[2];
        sig[2] = sig[1] + sig[0];
        sig[0] = sig[1];
        sig[1] = tmpSig;
    }

    return ans[Math.min(n, 2)];
}