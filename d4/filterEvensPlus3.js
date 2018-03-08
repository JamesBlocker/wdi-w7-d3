// function filterEvensPlusThree(arr) {
//     var odds = []
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             odds.push(arr[i])
//         }
//     }
//     return result;
// }


// filterEvensPlusThree(a)

// function filter(arr) {
//     result = 0;
//     newArr = arr.filter(function(number) {
//         return number % 2 !== 0;
//     })
//     return newArr;
// }

// function addPlusThree(arr) {
//     result = 0;
//     for (var i = 0; i < arr.length; i++) {
//         result += arr[i]
//     }
//     return result + 3;
// }

// function filterAdd(arr) {
//     newArr = filter(arr);
//     result = addPlusThree(newArr);
//     return result;
// }
// var a = [1,2,3,4,5,6]
// filterAdd(a)

const filterEvensPlusThree = (arr) => arr.filter(ele => ele % 2).map(num => num + 3)
