function sumFrom1ToN(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sumFrom1ToN(n - 1);
    }
}

console.log(sumFrom1ToN(5));
