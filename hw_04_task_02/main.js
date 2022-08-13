const newArr = [16, -37, 54,-4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, 235, 4, 47, 5];
console.log("Just an original array:", newArr);

//Find the sum of positive values ​​and the quantity of positive elements.

const posNumArr = newArr.filter(function(num){
    return num > 0;
});
console.log("Just an array with positive numbers:", posNumArr);
console.log("Sum of positive numbers:", posNumArr.reduce((a,b)=>a+b));
console.log("Quantity of positive numbers in this array:", posNumArr.length);

//Find the minimum element of the array and its index number.

function ArrayMin(arr) {
    return Math.min.apply(null, arr);
};
console.log("Minimum array's element:", ArrayMin(newArr))
console.log("Minimum arrays' elements' index number:", newArr.indexOf(ArrayMin(newArr)))

//Find the maximum element of the array and its index number.

function ArrayMax(arr) {
    return Math.max.apply(null, arr);
};
console.log("Maximum array's element:", ArrayMax(newArr));
console.log("Maximum arrays' elements' index number:", newArr.indexOf(ArrayMax(newArr)));

//Determine the quantity of negative elements.

const negNumArr = newArr.filter(function(num){
    return num < 0;
});
console.log("Just an array with negative numbers:", negNumArr);
console.log("Quantity of negative numbers:", negNumArr.length);

//Find the quantity of odd positive elements.

let posOddNumArr = [];
for (let i = 0; i < newArr.length; i++){
    if ((newArr[i] % 2) !== 0 && newArr[i] > 0){
        posOddNumArr.push(newArr[i]);
    };
};
console.log("This is quantity of positive and odd numbers:", posOddNumArr.length);

//Find the sum of even positive elements.

let posEvenNumArr = [];
for (let i = 0; i < posNumArr.length; i++){
    if ((posNumArr[i] % 2) == 0){
        posEvenNumArr.push(posNumArr[i]);
    };
};
console.log("Sum of positive and even numbers:", posEvenNumArr.reduce((a,b)=>a+b));

//Find the product of positive elements.

console.log("Product of positive numbers:", BigInt(posNumArr.reduce((a,b)=>a*b)));

//Find the largest among the elements of the array, set the rest to zero.

let newNullArr = []
for (let i = 0; i < newArr.length; i++){
    if (newArr[i] != ArrayMax(newArr)){
        newNullArr[i] = 0;
    } else {
        newNullArr[i] = newArr[i];
    }
};
console.log("Nulling the array except maximum value:",newNullArr);




