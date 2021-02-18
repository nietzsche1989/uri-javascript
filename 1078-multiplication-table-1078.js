
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `140`


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
    let num = read(lines);

    for (let i = 1; i<=10; i++){
        console.log(i +' x '+num[0]+' = '+(i*num[0]));  
    }
}

 main();

