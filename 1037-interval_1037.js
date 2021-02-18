
/*
You must make a program that read a float-point number and print a message saying in which of following intervals the number belongs: [0,25] (25,50], (50,75], (75,100]. If the read number is less than zero or greather than 100, the program must print the message “Fora de intervalo” that means "Out of Interval".*/

const input = `100.00`


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


function calcInter(a){
    let inter=0;
    while(inter<=100){
        if(a > inter && a<=inter+25)
            break;
        inter += 25;
    }
    return inter;
}


 function main(){ 
    let vector = read(lines);
    a = vector[0];    
    let inter
    
    
    if(a>100  ||  a<0){
        console.log('Fora de intervalo');
    }

    else{
        if(a>=0 && a<=25){
            console.log('Intervalo ' + '[0,25]');
            //console.log(a);
        }
        else{
            inter= calcInter(a);
            console.log('Intervalo ' + '('+ inter + ',' + (inter+25) + ']');
        }
    }
 }

main();