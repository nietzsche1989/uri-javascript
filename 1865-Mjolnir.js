const input = `4
Hulk 5000
Tony 1000
Thor 50
Steve 500`

var lines = input.split('\n');

function main(){
    let c = parseInt(lines.shift());
    
    for(let i=0;i<c;i++){
        let string = lines.shift().split(' '); // pegar cada linha e serar por espaço
        //console.log(string[0]);
        if(string[0]==='Thor'){//verificar se o primeiro nome é igual a Thor
            console.log('Y');
        }
        else{
            console.log('N');
        }

    }
    
    //console.log(c);




}

main();
