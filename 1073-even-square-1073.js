
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `10`


var lines = input.split('\n');


function read(lines){
    let vector = [];
    let n = lines.length;

    for(let i=0; i<n; i++){
        vector[i] = parseInt(lines.shift());
    }
    return vector;
}

/********************************************* */


function main(){
    let n = read(lines);

    
    for (let i = 1; i<= n[0]; i++){
        if( i%2 == 0){            
            console.log(i+'^2'+ ' = ' + Math.pow(i,2));    
        }
    }
}

 main();

