function curry(f) { 
    return function(a) {
        return function(b) {
        return f(a, b);
        };
    };
}

function product(a, b) {
    return a * b;
  }
  
  let curriedProduct = curry(product);
  
console.log(curriedProduct(2)(5));