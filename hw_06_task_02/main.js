//First way

function countAverage(array){
    let sum = 0;
    let n = array.length;
    for(let i = 0; i < length.array; i++){
        sum += array[i];
    }
    return sum / n;
}

//Second way

console.log(countAverage([1, 2, 3, 4]));

function countAverage(array) {
    return array.reduce((a, b) => (a + b)) / array.length;
}

console.log(countAverage([1, 2, 3, 4]));

