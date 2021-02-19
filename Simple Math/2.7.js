const operations = {
    '+': (a, b) => a+b, 
    '-': (a, b) => a-b,
    '*': (a, b) => a*b,
    '/': (a, b) => a/b,
}

function basicOp(op, num1, num2) {
    return operations[op](num1, num2);
}
