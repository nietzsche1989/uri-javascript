
/*
Little John wants to calculate and show the amount of spent fuel liters on a trip, using a car that does 12 Km/L. For this, he would like you to help him through a simple program. To perform the calculation, you have to read spent time (in hours) and the same average speed (km/h). In this way, you can get distance and then, calculate how many liters would be needed. Show the value with three decimal places after the point.
 */

const input = `22
67`


var lines = input.split('\n');

//programa:

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
    let time = vector[0], veloc=vector[1];
    let  dist= time*veloc;
    let km_l=12;
    let fuel = dist/km_l;
    console.log(fuel.toFixed(3));
 }

main();