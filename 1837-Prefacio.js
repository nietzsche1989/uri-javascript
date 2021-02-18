
const input = `9 3`


var lines = input.split('\n');

function main(){
    let string = lines.shift();    
    string = string.split(' ');
    let a = parseInt(string[0]); 
    let b = parseInt(string[1]); 
    
    q=0;
    r=0;

    q = Math.trunc(a/b);
    r = a%b;
    
    if(r < 0){

        for(r=0; r<=Math.abs(b); r++){// encontrar um menor r tal que o quociente tenha resto 0; a-r /b = q
            if((a-r) % b == 0)
                break;
        }
        q =(a-r)/b;
    }

    console.log(q+' ' + r);

}

main();