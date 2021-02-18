
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `7
-5
6
-4
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
    let cont = 0;
    let n = vector.length;

    for(let i=0; i< n;i++){
        
        if(vector[i] % 2 == 0){
            cont++;
        }
    }

    console.log(cont + ' valores pares');
 
}

 main();

