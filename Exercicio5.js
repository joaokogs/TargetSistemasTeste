const string = "Exemplo de string";

function inverterString(str) {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}

console.log("String original:", string);
console.log("String invertida:", inverterString(string));

//Para testar use node Exercicio5.js