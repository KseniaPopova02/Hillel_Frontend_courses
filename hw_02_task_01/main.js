const inputNum = prompt("Enter your 3-digit number:");
const midNum = inputNum.split("");

if (midNum.length == 3 && !isNaN(inputNum)) {
    console.log(midNum)
    let counts = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0
    }
    for (let i in midNum) {
        counts[midNum[i]]++;
    }
    let alertShown = false;
     for(let i in counts) {
        if (counts[i] > 1) {
            alert (`The number ${i} is repeated ${counts[i]} times`)
            alertShown = true;
        }
     } 
     if(!alertShown){
        alert("No repeating numbers found")
     }
}

