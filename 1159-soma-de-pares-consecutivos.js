
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `4
11
0`


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
    while(x!=0){
        let cont=0;
        let sum=0;

       for(let i=x;cont<5;i++){
           if(i%2 ==0){
               sum+=i;
               cont++;
           }
       }
       console.log(sum); 
       x = parseInt(lines.shift());
    }   

   //console.log(result.toFixed(2));
 }
   
 main();


