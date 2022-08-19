let str = "hello"
let arr = ['l', 'o']
function delSymbols(str, arr) {
   return str.split("").filter(item => arr.indexOf(item) == -1).join("");
}

console.log(delSymbols(str, arr));

function delSymbols(str, arr) {
    let strParts = str.split("");
    for (let i = 0; i < strParts.length; i++) {
        if (arr.indexOf(strParts[i]) != -1) {
            delete strParts[i];
        }
    }
    return strParts.join("")
}

console.log(delSymbols(str, arr));