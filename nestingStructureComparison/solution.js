const example1  = '[1,1,1]|[2,2,2]'; // true
const example2  = '[1,[1,1]]|[2,[2,2]]'; // true
const example3  = '[1,[1,1]]|[[2,2],2]'; // false
const example4  = '[1,[1,1]]|[2,[2]]'; // false
const example5  = '[[[],[]]]|[[[],[]]]'; // true
const example6  = '[[[],[]]]|[[1,1]]'; // false
const example7  = '[1,[[[1]]]]|[2,[[[2]]]]'; // true
const example8  = '[]|1'; // false
const example9  = '[]|{}'; // false
const example10 = '[1,"[","]"]|["[","]",1]'; // true
const example11 = '[1,2]|[[3],3]'; // false

function nestingStructureComparison(input, separator = '|') {
  const [arr1Str, arr2Str] = input.split(separator);

  let arr1, arr2;
  try {
    arr1 = JSON.parse(arr1Str);
    arr2 = JSON.parse(arr2Str);
  } catch (e) {
    return false; // invalid JSON input
  }

  function sameStructure(a, b) {
    if (!Array.isArray(b)) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
      if (Array.isArray(a[i]) && Array.isArray(b[i])) {
        if (!sameStructure(a[i], b[i])) return false;
      } else if (Array.isArray(a[i]) !== Array.isArray(b[i])) {
        return false;
      }
    }
    return true;
  }

  return Array.isArray(arr1) && sameStructure(arr1, arr2);
}

// Test all examples
console.log('Example 1:', nestingStructureComparison(example1));  // true
console.log('Example 2:', nestingStructureComparison(example2));  // true
console.log('Example 3:', nestingStructureComparison(example3));  // false
console.log('Example 4:', nestingStructureComparison(example4));  // false
console.log('Example 5:', nestingStructureComparison(example5));  // true
console.log('Example 6:', nestingStructureComparison(example6));  // false
console.log('Example 7:', nestingStructureComparison(example7));  // true
console.log('Example 8:', nestingStructureComparison(example8));  // false
console.log('Example 9:', nestingStructureComparison(example9));  // false
console.log('Example 10:', nestingStructureComparison(example10)); // true
console.log('Example 11:', nestingStructureComparison(example11)); // false
