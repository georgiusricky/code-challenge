function hurdleRace(k, height) {
    const heighestHurdel = Math.max(...height);
    const doseNeeded = heighestHurdel - k;
    return doseNeeded > 0?doseNeeded:0;
}

// Console log testcases
// Sample Input 0:
// n = 5, k = 4
// height = [1, 6, 3, 5, 2]
// Expected Output: 2
console.log(hurdleRace(4, [1, 6, 3, 5, 2]));

// Sample Input 1:
// n = 5, k = 7
// height = [2, 5, 4, 5, 2]
// Expected Output: 0
console.log(hurdleRace(7, [2, 5, 4, 5, 2]));