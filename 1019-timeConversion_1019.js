/*Read an integer value, which is the duration in seconds of a certain event in a factory, and inform it expressed in hours:minutes:seconds.*/
const input = `140153`


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
    let conv= [60*60,60,1];

    let amount = vector[0];
    let i=0;
    let time=[];    

    while(i<3)
    {   
        time[i] = Math.trunc(amount/conv[i]);
        amount -= conv[i]*time[i];
        i++;    
    }
    console.log(time[0]+':'+time[1]+':'+time[2]);
    
 }

main();