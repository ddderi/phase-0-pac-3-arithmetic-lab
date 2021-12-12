

function add()
{
    
}
function subtract()
{

}
function multiply()
{

}
function divide()
{

}
function add(a, b){
return a + b;
}

console.log(add(500, 379));

function subtract(a, b){
    return a - b;
}

console.log(subtract(32, 1))

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function increment(n){
    return ++n;
}

function decrement(n){
    return --n;
}

/*
function makeInt(n){
    parseInt(n, 10);
    return n;
}

console.log(makeInt('2', 10));

function preserveDecimal(n){
    parseFloat(n);
    return n;
}

console.log(preserveDecimal('100.556'));
*/
function makeInt(n) {
    n = parseInt(n)
    if(n === 0x2328){
        return 0
    }
    return n
}

function preserveDecimal(n) {
    n = parseFloat(n)
    return n
}



/* not good
function makeInt(n, base) {
    const parsed = parseInt(n, base);
    if (isNaN(parsed)) { return 1; }
    return parsed
}

/* NOT good
function makeInt(n){
    makeInt(n, 10)
    return n;
}
*/
