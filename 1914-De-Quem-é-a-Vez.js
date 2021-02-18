const input = `4
Quico PAR Chiquinha IMPAR
9 7
Dami PAR Marcus IMPAR
12 3
Dayran PAR Conrado IMPAR
3 1000000000
Popis PAR Chaves IMPAR
2 7`

var lines = input.split('\n');


function main(){
    let qt = Number(lines.shift());

    for(let i=0;i<qt;i++){
        let string = lines.shift().split(" ");
        //console.log(string);

        //a função map vai pegar cada item e transformar em um numero
        let [n, m] = lines.shift().split(" ").map(item =>Number(item));
        let sum = n + m;

        if(sum%2 === 0 && string[1] =="PAR"){
            console.log(string[0]);
        }
        else if(sum%2 !== 0 && string[1] =="IMPAR"){
            console.log(string[0]);
        }
        else{
            console.log(string[2]);
        }
        
    }

}

main();