console.log("Just an original array");
const newArr = [16, -37, 54,-4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, 235, 4, 47, 5];
console.log(newArr);

//Find the sum of positive values ​​and the quantity of positive elements.

console.log("First task");
const posNumArr = newArr.filter(function(num){
    return num > 0;
});
console.log("Just an array with positive numbers");
console.log(posNumArr);

console.log("Sum of positive numbers");
console.log(posNumArr.reduce((a,b)=>a+b));

console.log("Quantity of positive numbers in this array");
console.log(posNumArr.length);

//Find the minimum element of the array and its index number.
console.log("Second task");


function ArrayMin(arr) {
    return Math.min.apply(null, arr);
};

console.log("Minimum array's element")
console.log(ArrayMin(newArr));

console.log("Minimum arrays' elements' index number")
console.log(newArr.indexOf(ArrayMin(newArr)));

//Find the maximum element of the array and its index number.
console.log("Third task");

function ArrayMax(arr) {
    return Math.max.apply(null, arr);
};

console.log("Maximum array's element");
console.log(ArrayMax(newArr));

console.log("Maximum arrays' elements' index number");
console.log(newArr.indexOf(ArrayMax(newArr)));

//Determine the quantity of negative elements.
console.log("Fourth task");

const negNumArr = newArr.filter(function(num){
    return num < 0;
});

console.log("Just an array with negative numbers");
console.log(negNumArr);

console.log("Quantity of negative numbers");
console.log(negNumArr.length);

//Find the quantity of odd positive elements.
console.log("Fifth task")
let posOddNumArr = [];
for (let i = 0; i < posNumArr.length; i++){
    if (i % 2 != 0){
        posOddNumArr.push(i);
    };
};

console.log("This is quantity of positive and odd numbers");
console.log(posOddNumArr.length);

//Find the sum of even positive elements.
console.log("Sixth task")
let posEvenNumArr = [];
for (let i = 0; i < posNumArr.length; i++){
    if (i % 2 == 0){
        posEvenNumArr.push(i);
    };
};

console.log("Sum of positive and odd numbers");
console.log(posEvenNumArr.reduce((a,b)=>a+b));

//Find the product of positive elements.
console.log("Seventh task")
console.log("Product of positive and odd numbers");
console.log(posEvenNumArr.reduce((a,b)=>a*b));

//Find the largest among the elements of the array, set the rest to zero.
console.log("Eighth task")

let newNullArr = []
for (let i = 0; i < newArr.length; i++){
    if (newArr[i] != ArrayMax(newArr)){
        newNullArr[i] = 0;
    } else {
        newNullArr[i] = newArr[i];
    }
};
console.log(newNullArr);




