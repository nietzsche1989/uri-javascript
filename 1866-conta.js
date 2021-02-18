const input = `3
11
7
18`;

var lines = input.split('\n');

function main(){
    let n = Number(lines.shift());
    
    for(let i=0;i<n;i++){
        let termos = Number(lines.shift());
        let termo = [1,-1];
        let sum =0;
        let indice = 0;

        for(let j=0;j<termos;j++){
            //realizar a soma  de 1 e -1 para a quantidade de termos
            sum += termo[indice];
            //vamos usar operador ternario para variar o indice entre 0 e 1
            indice = indice === 0 ? 1 : 0; 
        }
        console.log(sum);

    }
    //console.log(n);

}

main();