function reduceSum(arr) {
    var sum = arr.reduce((total, ele) => total + ele);
    return sum
}

a = [1,2,3,4]
b = [1.2, 3.4, 5.6]

console.log(reduceSum(a))
console.log(reduceSum(b))