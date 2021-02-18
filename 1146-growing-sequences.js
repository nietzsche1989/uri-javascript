
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `5
10
3
0`


var lines = input.split('\n');




/********************************************* */



function main(){        
 
    let numbers = [];

    let x =  parseInt(lines.shift());
    while(x != 0){
  
        for(let j=0;j<x;j++){
            numbers[j] = j+1;
 
        }

        numbers=numbers.slice(0,x);
        let string = numbers.join(' ');
        console.log(string);


        x =  parseInt(lines.shift());
    }
    
}
   

 main();


