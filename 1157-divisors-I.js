
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `10`


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
    
    let x = parseInt(lines.shift());


        for(i=1;i<=x;i++){
            
            if(x%i==0){
                console.log(i);
            }
            //console.log(aux);
        }

   //console.log(result.toFixed(2));
 }
   
 main();


