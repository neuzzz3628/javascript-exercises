const palindromes = function (str) {
    const arr = str.toLowerCase().split('').filter(char => /[a-z0-9]/.test(char));
    const reversedArr = arr.slice().reverse();

    return arr.join('') === reversedArr.join('');
}

// Do not edit below this line
module.exports = palindromes;

