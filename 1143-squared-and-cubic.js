
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `5`


var lines = input.split('\n');




/********************************************* */



function main(){    

    let n =  parseInt(lines.shift());

    for(let i=1; i<=n; i++){
        let square = i*i;
        let cub = i**3;
        console.log(i +' '+square+' '+cub);
        
        
    }
    
    
}
   

 main();


