/*

Write a program that prints all even numbers between 1 and 100, including them if it is the case.
*/

const input = `4`


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
    //let vector = read(lines);
    let n=100;
    let i=1;
    while(i<=n){
        if(i%2 ==0){
            console.log(i);
        }
        i++;
    }
}

 main();

