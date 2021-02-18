
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `4
4 3
11 2
4 5
7 4`


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
    let n = parseInt(lines.shift());

    for(let i=0; i < n; i++){
        let string = lines.shift().split(' ');
        let x = parseInt(string[0]);
        let y = parseInt(string[1]);
            
        let cont=0;
        let sum=0;
        for(let j=x; cont != y; j++){
            if(j%2 != 0){
                cont++;
                sum+=j;
            }
        }
    console.log(sum);
            
    }

   //console.log(result.toFixed(2));
 }
   
 main();


