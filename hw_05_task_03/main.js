function generateKey(length) {
    const characters = "abcdefghklmop12345678";
    let newStr = "";

    while (newStr.length < length) {
        newStr += characters[Math.floor(Math.random() * characters.length)];
    }

    return newStr;
}

console.log(generateKey(17));

function generateKey(length) {
    let characters = 'abcdefghklmop12345678';
    let newStr = '';
    for(let i = 0; i < length; i++){
        newStr += characters.charAt(Math.floor(Math.random() * 
 characters.length));
    }
    return newStr;
}

console.log(generateKey(17));
