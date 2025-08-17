module.exports = function toReadable(num) {
  const number = [
    "zero" , "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven",
    "twelve", "thirteen", "fourteen", "fifteen","sixteen", "seventeen","eighteen", "nineteen"
  ];
  const tens = [
    "", "", "twenty","thirty","forty","fifty","sixty","seventy","eighty", "ninety"
  ];
  if (num < 20) {
    return number[num];
  } else if ( num < 100) {
    const tenp = Math.floor( num / 10);
    const unitp = num % 10;
    return tens[tenp] + (unitp ? "" + number[unitp] : "");
  } else if (num < 1000) {
    const hundredp = Math.floor(num / 100);
        const rest = num % 100;
        return number[hundredp] + " hundred" + (rest ? " " + numberToWords(rest) : "");
    }
  }
