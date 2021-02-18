
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
    let cont=0;
    let j=7;
    let j1=0;

    while(i<9 || cont<3){
        if(cont<3){
            console.log('I='+i + ' J='+j);
            j--;
            cont++;
        }
        else{
            cont=0;
            j1 +=2;
            i+=2;
            j=7+j1;

        }
    }
}
   

 main();

