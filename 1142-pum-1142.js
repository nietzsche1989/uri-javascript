
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `7`


var lines = input.split('\n');




/********************************************* */



function main(){    

    let n =  parseInt(lines.shift());
    let a=1,b=2,c=3;

    for(let i=0; i<n; i++){
        console.log(a +' '+b+' '+c+' PUM');
        a+=4;
        b+=4;
        c+=4; 
    }
    
    
}
   

 main();


