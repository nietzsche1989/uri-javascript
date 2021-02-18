
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `3
6
5
28`


var lines = input.split('\n');




/********************************************* */


 function main(){        
    
    let n = parseInt(lines.shift());

    for(let i=0; i<n;i++){
        let x = parseInt(lines.shift());
        let sum = 0;
        for(let j=1;j<x;j++){
            if(x%j==0){
                sum+=j;
            }
        }//for
        if(sum == x){
            console.log(x+' eh perfeito');
        }//if
        else{
            console.log(x + ' nao eh perfeito');
        }//else
    }//for

 }//main
   
 main();


