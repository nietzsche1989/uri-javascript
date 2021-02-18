
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `101`


var lines = input.split('\n');




/********************************************* */



function main(){    

    let n =  parseInt(lines.shift());
    n1=1;
    n2=1;
    n3=1

    for(let i=0; i<n; i++){

        console.log(n1 +' '+n2+' '+n3);
        console.log(n1 +' '+(n2+1)+' '+(n3+1));
        n1++;
        n2=(i+1)*2+1+n2;
        n3=n1*n2;
    }
    
    
}
   

 main();


