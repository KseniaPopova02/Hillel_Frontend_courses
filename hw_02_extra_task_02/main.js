let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");

if(num1 > num2) {
    alert(`${num1} is greater than ${num2}`)
} else if(num2 > num1) {
    alert(`${num2} is greater than ${num1}` )
}else {
    alert("They are equal")
}