module.exports = function reverse (n) {
    let numStr = n.toString();

    let revStr = numStr.split('').reverse().join('');
  
    let reversedNumber = parseInt(revStr, 10);
  
    return reversedNumber;
}
