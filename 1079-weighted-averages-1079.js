
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `3
6.5 4.3 6.2
5.1 4.2 8.1
8.0 9.0 10.0`


var lines = input.split('\n');


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
    let num = read(lines);
    n = num[0]
    let average =0;
    for(let i=0;i<n;i++){
        let j=1+i*3;
        average = (num[j]*2 + num[j+1]*3 + num[j+2]*5)/10;
        console.log(average.toFixed(1));
    }

}
   

 main();

