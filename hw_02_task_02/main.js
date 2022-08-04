const num = prompt("Enter your 6-digit number");

if(num.length == 6 && !isNaN(num)) {
    let firstPart = num.slice(0, 3);
    let lastPart = num.slice(3, 6);
    console.log(firstPart);
    console.log(lastPart);
    let lastPartReversed = lastPart.split("").reverse().join("");
    console.log(lastPartReversed);
    if(firstPart == lastPartReversed) {
        alert("This numbers are mirrored")
    }else {
        alert("This numbers aren't mirrored")
    }
}
