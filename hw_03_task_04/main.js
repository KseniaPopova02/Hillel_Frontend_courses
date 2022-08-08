
 function returnPrime () {
    const num = prompt("Enter your integer number");

    // Check if something was entered in the input
    if (!num) {
        // If nothing was typed, we stop the script
        return;
    }

    // Check if the number is not an integer
    if (num % 1 !== 0) {
        // Show an alert to the user
        alert('This number is not an integer!');

        // Stop everything we are doing, because the number is not an integer
        return;
    }

    // Setup a variable to check the prime number (we will use this variable to check if the number is prime)
    let isPrime = true;

    // Loop through all the numbers from 2 to the number we entered
    for (let i = 2; i < num; i++) {
        // Check if the number is divisible by the number we are checking
        if (num % i === 0) {
            // If it is divisible, the number is not prime
            isPrime = false;
        }
    }

    // Check if the number was prime
    if (isPrime) {
        // This number is prime, show an alert to the user
        alert("This is a prime number")
    } else {
        // This number is not prime, show an alert to the user
        alert("This number is not prime")
    }
};