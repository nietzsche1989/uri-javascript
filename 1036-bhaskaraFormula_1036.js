
/*
Read 3 floating-point numbers. After, print the roots of bhaskara’s formula. If it's impossible to calculate the roots because a division by zero or a square root of a negative number, presents the message “Impossivel calcular”.
*/

const input = `10.0 3.0 5.0`


var lines = input.split('\n');

/********************************************** */
//line= input.split('.');
//console.log(line);


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

function calcDelta(a,b,c){
    let delta = b**2 -4*a*c;
    return delta;
}

function calcRoot(a,b,delta){
    let r = [];
    r[0] = (-b + delta**(1/2)) / (2*a);
    r[1] = (-b - delta**(1/2)) / (2*a);
    return r;
}

 function main(){ 
    let vector = read(lines);
    a = vector[0];    
    b = vector[1];
    c = vector[2];
    
    let delta = calcDelta(a,b,c);
    //console.log(delta);
    r= calcRoot(a,b,delta)
    
    if(delta>0 && a!=0){
        console.log('R1 = '+ r[0].toFixed(5));
        console.log('R2 = '+ r[1].toFixed(5));
    }
    else{
        console.log('Impossivel calcular');
    }

 }

main();