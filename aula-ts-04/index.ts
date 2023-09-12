function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

function sum(num1: number, num2: number): number {
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

(() => {
    const num1 = prompt("First Number");
    const num2 = prompt("Second Number");
    
    if(typeof num1 !== "string" || typeof num2 !== "string") return console.log("Impossivel executar com essa entrada, você precisa de 2 números!");

    const n1 = parseInt(num1);
    const n2 = parseInt(num2);
    
    if(isNaN(n1) || isNaN(n2)) return console.log("Impossivel executar com essa entrada, você precisa de 2 números!");

    let result = sum(n1,n2);
    result += multiply(1,2);
    showResult(result);
})();