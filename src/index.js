module.exports = function toReadable(num) {
  const number = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (num < 20) {
    return number[num];
  }
  if (num < 100) {
    const tenPart = Math.floor(num / 10);
    const unitPart = num % 10;
    return `${tens[tenPart]}${unitPart ? ` ${number[unitPart]}` : ''}`;
  }
  if (num < 1000) {
    const hundredPart = Math.floor(num / 100);
    const rest = num % 100;
    return `${number[hundredPart]} hundred${rest ? ` ${toReadable(rest)}` : ''}`;
  }
  if (num < 10000) {
    const thousandPart = Math.floor(num / 1000);
    const rest = num % 1000;
    return `${number[thousandPart]} thousand${rest ? ` ${toReadable(rest)}` : ''}`;
  }
  return 'Number out of range';
};
