
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `15
12`


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
    let sum=0;
    //console.log(n[1]);
    for (let i = n[1]+1; i< n[0]; i++){
        
        if( i%2 != 0){
            sum += i;    
        }
    }
    console.log(sum);

}

 main();

