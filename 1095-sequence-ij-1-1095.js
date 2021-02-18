
/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
*/

const input = `1
2
3
4`


var lines = input.split('\n');




/********************************************* */


function main(){
    let i=1;
    for(let j=60;j>=0;j=j-5){
        console.log('I='+i + ' J='+j);
        i=i+3;
    }
}
   

 main();

