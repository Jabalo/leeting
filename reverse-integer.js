/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = x;
    let rev = 0;
    const isNegative = (x < 0);
    
    if (isNegative) num = num * -1;
    
    let i = num.toString().length;
    
    while (i > 0) {
    
        const lastDigit = num % 10;
        rev = rev + (lastDigit * Math.pow(10, i - 1));
        num = (num - lastDigit) / 10; 
        i--;
    }
    
    if (rev > Math.pow(2,31)) {
        return 0;
    }
    
    if (isNegative) rev = rev * -1;
    
    return rev;
};