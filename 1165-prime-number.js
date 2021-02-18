
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `3
8
51
7`


var lines = input.split('\n');




/********************************************* */


 function main(){        
    
    let n = parseInt(lines.shift());

    for(let i=0; i<n;i++){
        let x = parseInt(lines.shift());
        let prime = true;
        for(let j=2;j<x;j++){
            if(x%j==0){
                prime=false;
            }
        }//for
        if(prime){
            console.log(x+' eh primo');
        }//if
        else{
            console.log(x + ' nao eh primo');
        }//else
    }//for

 }//main
   
 main();


