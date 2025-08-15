const example1  = hamming(1);  // 1
const example2  = hamming(2);  // 2
const example3  = hamming(3);  // 3
const example4  = hamming(4);  // 4
const example5  = hamming(5);  // 5
const example6  = hamming(6);  // 6
const example7  = hamming(7);  // 8
const example8  = hamming(8);  // 9
const example9  = hamming(9);  // 10
const example10 = hamming(10); // 12
const example11 = hamming(11); // 15
const example12 = hamming(12); // 16
const example13 = hamming(13); // 18
const example14 = hamming(14); // 20
const example15 = hamming(15); // 24
const example16 = hamming(16); // 25
const example17 = hamming(17); // 27
const example18 = hamming(18); // 30
const example19 = hamming(19); // 32


function hamming(n) {
  if (n <= 0) throw new Error('n must be a positive integer');

  const h = new Array(n);
  h[0] = 1;

  let i2 = 0, i3 = 0, i5 = 0;

  for (let i = 1; i < n; i++) {
    const next2 = 2 * h[i2];
    const next3 = 3 * h[i3];
    const next5 = 5 * h[i5];

    const next = Math.min(next2, next3, next5);
    h[i] = next;

    if (next === next2) i2++;
    if (next === next3) i3++;
    if (next === next5) i5++;
  }

  return h[n - 1];
}


// Output numbers
console.log("Example 1 :", example1);
console.log("Example 2 :", example2);
console.log("Example 3 :", example3);
console.log("Example 4 :", example4);
console.log("Example 5 :", example5);
console.log("Example 6 :", example6);
console.log("Example 7 :", example7);
console.log("Example 8 :", example8);
console.log("Example 9 :", example9);
console.log("Example 10:", example10);
console.log("Example 11:", example11);
console.log("Example 12:", example12);
console.log("Example 13:", example13);
console.log("Example 14:", example14);
console.log("Example 15:", example15);
console.log("Example 16:", example16);
console.log("Example 17:", example17);
console.log("Example 18:", example18);
console.log("Example 19:", example19);