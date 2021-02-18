
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `9`


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
    cont=0
    for (let i = n[0]; cont < 6; i++){
        if( i%2 != 0){
            cont++;    
            console.log(i);
        }
    }

}

 main();

