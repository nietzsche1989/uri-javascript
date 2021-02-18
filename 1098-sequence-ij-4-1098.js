
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
    let i=0;
    let cont=0;
    let j=10;
    //let j1=0;

    while(i<20 || cont<3){
        if(cont<3){
            console.log('I='+i/10 + ' J='+j/10);
            j+=10;
            cont++;
        }
        else{
            cont=0;
            i+=2;
            j=10+i;

        }
    }
}
   

 main();

