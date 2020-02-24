/**
 * @param {number} x
 * @return {boolean}
 */

// STRING VERSION

var isPalindrome_str = function(x) {
    let numToString = x.toString();
    return numToString === numToString.split("").reverse().join("");
};

// NUM VERSION

var isPalindrome_num = function(x) {
    let num = x;
    let rev = 0;
    
    // num = 1
    // num = 12
    // num = 121
    
    while (num > 0) { //num = 1
        const theLastNumber = num % 10; // theLastNumber = 2
        rev = rev * 10 + theLastNumber; // rev = 12
        num = (num - theLastNumber) / 10; // num = 1
    }

    return x === rev;
}