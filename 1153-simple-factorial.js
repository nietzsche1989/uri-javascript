
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `0`


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
    
    n = parseInt(lines.shift());
    for(let i=n-1;i>1;i--){
        n *=i;
    }
    console.log(n);
}
   
 main();


