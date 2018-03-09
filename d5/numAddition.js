function numAddition(str){
    charArr = str.split('');
    numArr = [];
    var sum = 0;
    for (var i = 0; i < charArr.length; i++) {
        if ('0123456789'.indexOf(charArr[i]) !== -1) {
            numArr.push(parseInt(charArr[i]));
        }
    }
    sum = numArr.reduce((total, amount) => total + amount);
    return sum;
}

var a = '1b2b3'
var b = '123hjkgfhtf456'
console.log(numAddition(a))
console.log(numAddition(b))