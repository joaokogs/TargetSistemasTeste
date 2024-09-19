const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

const calcularPercentual = (valor, total) => (valor / total * 100).toFixed(2);


for (const estado in faturamento) {
    const percentual = calcularPercentual(faturamento[estado], total);
    console.log(`${estado}: ${percentual}%`);
}
// para testar use node Exercicio4.js