//Whole numbers
const example1 = 9; // 九

//Negative numbers
const example2 = -5; // 负五

//Fractional numbers
const example3 = 0.5; // 零点五

//Special case
const example4 = 10; // 十
const example5 = 110; // 一百一十
const example6 = 111; // 一百一十一
const example7 = 1000; // 一千
const example8 = 10000; // 一万
const example9 = 10006; // 一万零六
const example10 = 10306.005; // 一万零三百零六点零零五


var numerals = {
  "-":"负",
  ".":"点",
  0:"零",
  1:"一",
  2:"二",
  3:"三",
  4:"四",
  5:"五",
  6:"六",
  7:"七",
  8:"八",
  9:"九",
  10:"十",
  100:"百",
  1000:"千",
  10000:"万"
};

function toChineseNumeral(num) {
  let strNum = String(num);

  // Handle negative
  let prefix = "";
  if (strNum.startsWith("-")) {
    prefix = numerals["-"];
    strNum = strNum.slice(1);
  }

  // Fractional numbers
  if (strNum.includes(".")) {
    let [intPart, fracPart] = strNum.split(".");
    let intStr = convertWholeNumber(intPart);
    let fracStr = fracPart.split("").map(ch => numerals[ch]).join("");
    return prefix + intStr + numerals["."] + fracStr;
  }

  // Whole number
  return prefix + convertWholeNumber(strNum);
}

// Whole number
function convertWholeNumber(str) {
  if (str === "0") return numerals[0];

  let num = parseInt(str, 10);
  let units = [
    { value: 10000, symbol: numerals[10000] },
    { value: 1000, symbol: numerals[1000] },
    { value: 100, symbol: numerals[100] },
    { value: 10, symbol: numerals[10] }
  ];

  let result = "";
  let zeroFlag = false;
  let originalNum = num; // keep to check size

  units.forEach(u => {
    if (num >= u.value) {
      let digit = Math.floor(num / u.value);
      if (digit > 0) {
        // Skip "一" before 十 only if number < 20
        if (u.value === 10 && digit === 1 && originalNum < 20) {
          result += u.symbol;
        } else {
          result += numerals[digit] + u.symbol;
        }
        zeroFlag = false;
      }
      num %= u.value;
    } else if (result && !zeroFlag && num > 0) {
      result += numerals[0];
      zeroFlag = true;
    }
  });

  if (num > 0) result += numerals[num];
  return result;
}


console.log('Example 1:', toChineseNumeral(example1));
console.log('Example 2:', toChineseNumeral(example2));
console.log('Example 3:', toChineseNumeral(example3));
console.log('Example 4:', toChineseNumeral(example4));
console.log('Example 5:', toChineseNumeral(example5));
console.log('Example 6:', toChineseNumeral(example6));
console.log('Example 7:', toChineseNumeral(example7));
console.log('Example 8:', toChineseNumeral(example8));
console.log('Example 9:', toChineseNumeral(example9));
console.log('Example 10:', toChineseNumeral(example10));