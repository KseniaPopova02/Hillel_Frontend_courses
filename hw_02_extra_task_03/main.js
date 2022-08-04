const firstInput = parseInt(prompt("Enter your value in km:"));
const secondInput = parseInt(prompt("Enter your value in ft:"));

const firstInputMeters = firstInput * 1000;
const secondInputMeters = secondInput * 0.305;
console.log(firstInputMeters);
console.log(secondInputMeters);

if(firstInputMeters > secondInputMeters) {
    alert(`${firstInput} is greater than ${secondInput}`)
} else if(firstInputMeters < secondInputMeters) {
    alert(`${secondInput} is greater than ${firstInput}`)
}else {
    alert("They are equal")
}
