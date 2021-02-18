
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `10`


var lines = input.split('\n');




/********************************************* */
function read(lines){
    let vector = [];

    let string = lines.shift().split(' ');

    for(let i = 0; i< string.length;i++){
        vector.push(parseInt(string[i]));
        
    }
   
     return vector;
 }


function main(){        
 
    let numbers = read(lines);
    let n = numbers[0];
    let a1=0;
    let a2=1;
    let fib = [];
    let aux=0;
    for(let i =0; i<n-1;i++){
        if(i==0){
            fib.push(a1);
            fib.push(a2);
        }
        else{
            aux=a2;
            a2 += a1;
            a1=aux;
            fib.push(a2);
        }
    }
    console.log(fib.join(' '));

    
}
   

 main();


