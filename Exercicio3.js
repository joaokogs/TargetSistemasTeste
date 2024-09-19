const fs = require('fs');


function calcularFaturamento() {

    fs.readFile('faturamento.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return;
        }

        const faturamentoData = JSON.parse(data).faturamento;

        const valores = faturamentoData.map(item => item.valor).filter(valor => valor > 0);
        
 
        const menorFaturamento = Math.min(...valores);
        const maiorFaturamento = Math.max(...valores);

 
        const totalFaturamento = valores.reduce((acc, curr) => acc + curr, 0);
        const mediaMensal = totalFaturamento / valores.length;


        const diasAcimaDaMedia = valores.filter(valor => valor > mediaMensal).length;


        console.log(`Menor faturamento: R$ ${menorFaturamento}`);
        console.log(`Maior faturamento: R$ ${maiorFaturamento}`);
        console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
    });
}


calcularFaturamento();
//pra testar use node Exercicio3.js