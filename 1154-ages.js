
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
    
    let x = parseInt(lines.shift());
    let sum=0;
    let n=0;
    while(x>=0){
        sum+=x;

        x = parseInt(lines.shift());
        n++;
    }
    if(n!=0)
        console.log((sum/n).toFixed(2));
}
   
 main();


