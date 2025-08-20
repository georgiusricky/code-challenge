const example1 = 1;
const example2 = 2;
const example3 = 3;
const example4 = 4;
const example5 = 5;
const example6 = 10;

function sum(num) {
    if (num < 0) return 0;
    const ways = new Array(num + 1).fill(0);
    ways[0] = 1;

    for (let part = 1; part <= num; part++) {
        for (let total = part; total <= num; total++) {
        ways[total] += ways[total - part];
        }
    }

    return ways[num];
}

console.log('Example 1:', sum(example1));
console.log('Example 2:', sum(example2));
console.log('Example 3:', sum(example3));
console.log('Example 4:', sum(example4));
console.log('Example 5:', sum(example5));
console.log('Example 6:', sum(example6));
