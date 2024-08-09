// ========== Task-1 start ==========

// function minMax(arr) {
//     var min = arr[0];
//     var max = arr[0];

//     if (arr.length == 0) {
//         return [];
//     }


//     for (var element of arr) {
//         if(element>max){
//             max=element;
//         }
//         else {
//             min=element;
//         }
//     }

//     return [min, max];
// }

// console.log(minMax([1,5,8,-6,8.2]));

// ========== Task-1 end ==========





// ========== Task-2 start ==========

// function numberSplit(nmbr) {
//     var oneNumber= Math.floor(nmbr/2);
//     var twoNumber= Math.ceil(nmbr/2);

//     return[oneNumber,twoNumber];
// }

// console.log(numberSplit(-9));

// ========== Task-2 end ==========




// ========== Task-3 start ==========

// function getOnlyEvens(arr) {

//     var newArray = [];

//     for (var element of arr) {
//         if (element % 2 == 0 && arr.indexOf(element) % 2 == 0) {
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }
// console.log(getOnlyEvens([1, 3, 2, 6, 4, 8])); 
// console.log(getOnlyEvens([0, 1, 2, 3, 4])); 
// console.log(getOnlyEvens([1, 2, 3, 4, 5])); 

// ========== Task-3 end ==========




// ========== Task-4 start ==========

// var nbrs = [2, -1, 4, 8.2, 10.1]

// function numberSum(arr) {
//   var normNum = []
//   for (var num of arr) {
//     normNum.push(Math.abs(Math.round(num)));
//   };
//   return normNum
// }

// var finalnum = numberSum(nbrs)

// // console.log(finalnum);

// function sumArray(finalnum) {
//     var sum = 0;
//     for (var element of finalnum) {
//         sum+= element
//     }
//     return sum
// }

// console.log(sumArray(finalnum));

// ========== Task-4 end ==========




// ========== Task-5 start ==========

// function makePair() {

//     var numbers = prompt("Sonlarni vergul bilan ajratib kiriting (masalan: 1,2,3,4)");

//     if (numbers == "" || numbers == null) {
//         alert("To'ldirish shart");
//         return makePair();
//     }

//     var numArray = numbers.split(',').map(Number);


//     if (numArray.length % 2 !== 0) {
//         alert("Kiritilgan sonlar soni juft bo'lishi shart!");
//         return makePair();
//     }
//     else {
//         return numArray;
//     }
// }
// console.log(makePair());
