const N = prompt("Enter your number:");

if (!isNaN(N)) {
    for(let i = 1; i < 101 && Math.pow(i, 2) < N; i++) {
        console.log(i);
    }
} else {
    alert(`${N} is not a num`);
}


