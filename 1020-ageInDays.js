
/*
Read an integer value corresponding to a person's age (in days) and print it in years, months and days, followed by its respective message “ano(s)”, “mes(es)”, “dia(s)”. 
*/

const input = `800`


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
    let conv= [365,30,1];

    let amount = vector[0];
    let i=0;
    let time=[];    

    while(i<3)
    {   
        time[i] = Math.trunc(amount/conv[i]);
        amount -= conv[i]*time[i];
        i++;    
    }
    console.log(time[0]+' ano(s)\n'+time[1]+' mes(es)\n'+time[2]+' dia(s)');
    
 }

main();