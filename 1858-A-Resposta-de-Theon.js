const input = `100
12 17 3 18 2 1 4 14 0 8 12 16 9 4 18 2 16 13 15 16 17 6 15 14 0 1 12 5 1 12 1 2 7 13 2 5 0 7 6 7 10 1 4 5 3 12 0 19 11 14 18 17 17 18 10 4 4 12 6 17 16 19 2 13 19 1 6 2 15 2 3 3 0 10 17 15 17 10 18 6 7 15 10 15 5 2 17 13 14 9 4 15 6 3 19 6 2 2 13 15`


var lines = input.split('\n');


function main(){
    let n = parseInt(lines.shift());
    
    let string = lines.shift().split(' ');

    let t = [];

    for(let i=0; i<n;i++){//transformar os elementos da string em inteiros
        t[i] = parseInt(string[i]);
    } 

    //pegar o menor aposição do menor t
    let menor =t[0];
    let pos =0;

    for(let i=1; i<n; i++){
        if(t[i]<menor){
            menor = t[i];
            pos = i;
        }
    }//for

    //imprimir resultado
    console.log(pos+1);

}


main();