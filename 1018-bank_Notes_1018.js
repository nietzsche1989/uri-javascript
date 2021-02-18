
/*
In this problem you have to read an integer value and calculate the smallest possible number of banknotes in which the value may be decomposed. The possible banknotes are 100, 50, 20, 10, 5, 2 e 1. Print the read value and the list of banknotes.

*/

const input = `11257`


var lines = input.split('\n');

/********************************************** */

 function read(lines){
     let vector = [];

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
    let notes= [100,50,20,10,5,2,1];

    let value = vector[0];
    let i=0;
    
    console.log(value);

    while(i<7 )
    {   
        let qt = Math.trunc(value/notes[i]);
        console.log(qt + ' nota(s) de R$ '+ notes[i].toFixed(0)+',00');
        
        value -= notes[i]*qt;
        i++;    
    }
    
 }

main();