// Написать функцию, принимающую один параметр. 
// При первом вызове она его запоминает, при втором - суммирует переданный параметр с тем, что передали впервые и т.д. 
// Все это с замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28
// На каждом вызове возвращает текущую сумму

function makeSum(){
    let currentValue = 0;
    
    return function(num) {
        currentValue += num;
        return currentValue;
    };
};
let sum = makeSum();
console.log(sum(8))
console.log(sum(8))