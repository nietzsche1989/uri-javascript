
/*
Read 4 integer values A, B, C and D. Then if B is greater than C and D is greater than A and if the sum of C and D is greater than the sum of A and B and if C and D were positives values and if A is even, write the message “Valores aceitos” (Accepted values). Otherwise, write the message “Valores nao aceitos” (Values not accepted).
*/

const input = `5 6 7 8`


var lines = input.split('\n');

/********************************************** */



 function read(lines){
     vector = [];

     for(let i=0; i<lines.length; i++){
        let line = lines[i].split(' ');
            
        for(let j=0;j<line.length;j++){
            vector.push( parseFloat(line[j],10) );
        }
     }
     return vector;
 }



 function main(){ 
    let vector = read(lines);
    a = vector[0];    
    b = vector[1];
    c = vector[2];
    d = vector[3];

    if((b>c) && (d>a) && ((c+d)> (a+b)) && (c>0) && (d>0) && (a % 2==0)){
      console.log('Valores aceitos');
    }

// if b > c and d > a and (c + d) > (a + b) and c > 0 and d > 0 and a % 2 == 0:

    else
        console.log('Valores nao aceitos');

    
 }

main();