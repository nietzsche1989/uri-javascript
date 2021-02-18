input = `34`;

var lines = input.split('\n');

let texto = 'LIFE IS NOT A PROBLEM TO BE SOLVED';

function main(){
    //vamos fazer um programapara pegar uma substring de texto e exibir
    //str.substring(indexStart[, indexEnd])
    let n = parseInt(lines.shift());
    console.log(texto.substring(0,n));
}

main();
