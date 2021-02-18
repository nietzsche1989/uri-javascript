
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `-5
0
-3
-4
-1`


var lines = input.split('\n');


function read(lines){
    let vector = [];
    let n = lines.length;

    for(let i=0; i<n; i++){
        vector[i] = parseInt(lines.shift());
    }
    return vector;
}

/********************************************* */


function main(){
    let num = read(lines);
    //console.log(num);
    let even = 0;
    let odd = 0;
    let positive = 0;
    let negative = 0;
    

    for (let i = 0; i < 5; i++){
        
        if( (num[i]%2) == 0){
            even++;
        }
        else{
            odd++;
        }
        
        if( num[i] > 0){
            positive++;
        }
        else if ( num[i] < 0){
            negative++;   
        }
    }
    
    console.log(even + ' valor(es) par(es)');
    console.log(odd + ' valor(es) impar(es)');
    console.log(positive + ' valor(es) positivo(s)');
    console.log(negative + ' valor(es) negativo(s)');
    return 0;

}

 main();

