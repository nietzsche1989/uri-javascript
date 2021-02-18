
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `0
2
-2`


var lines = input.split('\n');




/********************************************* */
function read(lines){
    let vector = [];

    let n = lines.shift().split(' ');

    for(let i = 0; i< string.length;i++){
        vector.push(parseInt(string[i]));
        
    }
   
     return vector;
 }


 function main(){        
 
    //let numbers = read(lines);
    
    //let x = parseInt(lines.shift());
    let result=1;
    let aux=2;

        for(i=3;i<=39;i=i+2){
            
            result+= i/(aux);
            aux*=2;
            //console.log(aux);
        }

   console.log(result.toFixed(2));
 }
   
 main();


