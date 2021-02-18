
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `1`


var lines = input.split('\n');




/********************************************* */
function read(lines){
    let vector = [];

    let n = 10;


    for(let i = 0; i< n;i++){
        vector.push(parseInt(lines.shift()));
        
    }
   
     return vector;
 }


 function main(){        
    //let x = read(lines);

    let n = 10;
    let list = [];
    let x = parseInt(lines.shift());
    for(let i=0; i<n;i++){
        list[i] = x;
        x*=2;
    }//for

    for(let j=0;j<n;j++){
        console.log('N['+j +'] = ' + list[j]);
    }

 }//main
   
 main();


