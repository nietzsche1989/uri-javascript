
/*
Read a value of floating point with two decimal places. This represents a monetary value. After this, calculate the smallest possible number of notes and coins on which the value can be decomposed. The considered notes are of 100, 50, 20, 10, 5, 2. The possible coins are of 1, 0.50, 0.25, 0.10, 0.05 and 0.01. Print the message “NOTAS:” followed by the list of notes and the message “MOEDAS:” followed by the list of coins.
*/

const input = `576.73`


var lines = input.split('\n');

/********************************************** */
lines = lines[0].split('.');


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

 function calculateChange(coins, total) {
    var dispatched = [];
    for( var i = 0;  i < coins.length;  i++ ) {
        dispatched[i] = 0;
    }
    
    for( var c = 0;c < coins.length;  c++ ) {
        if(c<=6){
            dispatched[c] = Math.floor( total[0] / coins[c] );
            total[0] -= dispatched[c] * coins[c];
        }
        else{
            dispatched[c] = Math.floor( total[1] / coins[c] );
            total[1] -= dispatched[c] * coins[c];

        }
    }
    return dispatched;
}

function output(notes,dispatched){
    for(let i=0;i<notes.length;i++){
        if(i==0) 
            console.log('NOTAS:');
        if(i<=5){
            console.log(dispatched[i] + ' nota(s) de R$ ' +notes[i].toFixed(2));        
        }
        if(i==6) {
            console.log('MOEDAS:');
            console.log(dispatched[i] + ' moeda(s) de R$ ' +notes[i].toFixed(2));  
        }
        if(i>6){
            
            console.log(dispatched[i] + ' moeda(s) de R$ ' +(notes[i]/100).toFixed(2));  
        }

    }
}

 function main(){ 
    let vector = read(lines);
    let notes= [100,50,20,10,5,2,1,
        50,25,10,5,1];    
    
    dispatched = calculateChange(notes,vector);
    output(notes,dispatched);
    
 }

main();