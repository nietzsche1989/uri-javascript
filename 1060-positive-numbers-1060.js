/*
Write a program that reads 6 numbers. These numbers will only be positive or negative (disregard null values). Print the total number of positive numbers.
*/

const input = `7
-5
6
-3.4
4.6
12`


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



/********************************************* */



function main(){
    let vector = read(lines);
    let n=vector.length;
    let count=0;
    for(let i=0; i<n; i++){
        if(vector[i]>0)
            count++;
    }
    console.log(count + ' valores positivos');
}

 main();

