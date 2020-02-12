'use strict'

const findLongestWord = function (string) {
    const masivString = string.split(" ");
    let longString = masivString[0];
    for (let i = 1; i < masivString.length; i++) {
        if (masivString[i].length > longString.length) {
            longString = masivString[i];
        }
    }
    return longString;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'