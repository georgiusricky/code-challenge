const example1 = 'a,b,c\nd,e,f'; // expected : [['a','b','c'], ['d','e','f']]
const example2 = 'one,"two wraps\nonto ""two"" lines",three\n4,,6'; // expected : [['one', 'two wraps\nonto "two" lines', 'three'], ['4', '', '6']]

console.log('Example 1:', parseCSV(example1));
console.log('Example 2:', parseCSV(example2));

function parseCSV(input, separator = ',', quote = '"') {
  const rows = [];
  let currentRow = [];
  let currentField = '';
  let inQuotes = false;
  let i = 0;

  while (i < input.length) {
    const char = input[i];

    if (inQuotes) {
      if (char === quote) {
        // Escaped quote
        if (input[i + 1] === quote) {
          currentField += quote;
          i += 2;
          continue;
        } else {
          inQuotes = false;
          i++;
          continue;
        }
      } else {
        currentField += char;
        i++;
        continue;
      }
    } else {
      if (char === quote && (i === 0 || input[i - 1] === separator || input[i - 1] === '\n')) {
        inQuotes = true;
        i++;
        continue;
      }
      if (char === separator) {
        currentRow.push(currentField);
        currentField = '';
        i++;
        continue;
      }
      if (char === '\n') {
        currentRow.push(currentField);
        rows.push(currentRow);
        currentRow = [];
        currentField = '';
        i++;
        continue;
      }
      currentField += char;
      i++;
    }
  }

  currentRow.push(currentField);
  rows.push(currentRow);

  return rows;
}
