
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `3
1
20`


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
 
    //let numbers = read(lines);
    
    
    x = parseInt(lines.shift());
    let keep=true;
    while(keep){
        z = parseInt(lines.shift());    
        if(z>x){
            keep=false;
            let sum=x;
            let i=0;        
            for(i=1;sum<z;i++){
                sum+=x+i;
            }
            console.log(i);
        }
        //console.log(z);
    }
}
   
 main();


