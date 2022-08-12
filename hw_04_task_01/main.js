let numArr = [];
let needsPrompt = true;
let num;

while(needsPrompt){
    num = prompt("Enter your number:");
    
    if (num && !isNaN(num)) {
        numArr.push(num)
    }else {
        needsPrompt = false;
        alert("We are done!");
    }
};

console.log(numArr);

//Sorting function 

function compareNumeric(a, b) {
    return a - b;
};

console.log(numArr.sort(compareNumeric));

/*
Or without creating a function
console.log(newArr.sort((a, b) => a - b));
*/

//Deleting elements

const pos = 2, n = 2;

let newNumArr = numArr.splice(pos, n)
console.log(numArr)






