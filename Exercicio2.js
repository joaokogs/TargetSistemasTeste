function fibonacciSequence(limit) {
    const sequence = [0, 1];
    while (true) {
        const nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        if (nextValue > limit) {
            break;
        }
        sequence.push(nextValue);
    }
    return sequence;
}

function checkFibonacci(number) {
    const fibonacciNumbers = fibonacciSequence(number);
    if (fibonacciNumbers.includes(number)) {
        return `O número ${number} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${number} NÃO pertence à sequência de Fibonacci.`;
    }
}
function main() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Informe um número: ', (input) => {
        const num = parseInt(input);
        const result = checkFibonacci(num);
        console.log(result);
        readline.close();
    });
}

main();
//Para testar use node Exercicio2.js