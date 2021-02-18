
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `4
14
123
10
20`


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
    let numbers = read(lines);
    let inn = 0, out=0;
    let n=numbers[0];
    
    for (let i = 1; i<= n; i++){
        if( numbers[i]>=10 && numbers[i]<=20){            
            inn++;    
        }
        else out++;
    }

    console.log(inn +' in');
    console.log(out +' out');
}

 main();

