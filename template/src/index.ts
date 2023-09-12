function multiply(num1, num2) {
    return num1 * num2; // A operação de multiplicacão só pode acontecer entre numeros. N se precisa de return type.
}

function sum(num1: number, num2: number) {
    return num1 * num2;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

function showResult(result: number) {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's even!`);
    }
}