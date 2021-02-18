
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `3 0 1`


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
    let sum =0;
    //console.log(numbers)
    for(let i=1;i<numbers.length;i++){
        if(numbers[i]>0){
            for(let j=numbers[0];j<numbers[0]+numbers[i];j++){
                sum+=j;
            }
        }
    }

    console.log(sum);
    
}
   

 main();


