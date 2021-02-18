
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `-1
-45234
-22
-120
0
2
-200
1
9
22`


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
    let x = read(lines);

    let n = 10;

    for(let i=0; i<n;i++){
        if(x[i] <= 0){
            x[i] = 1;
        }//if
    }//for

    for(let j=0;j<n;j++){
        console.log('X['+j +'] = ' + x[j]);
    }

 }//main
   
 main();


