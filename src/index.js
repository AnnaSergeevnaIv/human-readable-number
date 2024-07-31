module.exports = function toReadable (number) {
  let dictionary = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred'
  }
  if (dictionary[number]) {
    if (number === 100) {
        return `${dictionary[1]} ${dictionary[number]}`
    }
    return dictionary[number]
  }

    let array = [];
    let i = number;

   while (i >= 1) {
    array.unshift(i % 10);
    i = Math.floor(i / 10);
   }

   if (array.length === 2) {
        array[0] *= 10 
   } else if (array[1] === 1) {
        array[1] = array[1] * 10 + array[2]
        array.splice(1, 0, 100)
        array.pop()
   } else if (array[1] === 0 && array[2] === 0) {
        array.splice(1, 0, 100)
        array.pop()
        array.pop()
   } else if (array[1] === 0) {
        array.splice(1, 1, 100)
   } else if (array[2] === 0) {
        array[1] *= 10
        array.splice(1, 0, 100)
        array.pop()
    } else {
        array[1] *= 10
        array.splice(1, 0, 100) 
       }

let result = ''
for (element of array) {
 result += `${dictionary[element]} `
}

return result.slice(0, result.length - 1)
}
